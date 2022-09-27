import { Injectable } from '@nestjs/common';
import {InjectConnection} from "@nestjs/mongoose";
import {Connection} from "mongoose";

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {}

  getHello(): string {
    return 'Hello World!';
  }

  async generateViews() {

    //Contactpersonen
    await this.connection.dropCollection('Contactpersonen')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('Contactpersonen', {viewOn: 'contactpersonen', pipeline: [
        // Match only non lead active members
        {
          '$match': {
            'statuscode': { '$eq': 1 },
            //'crmrd_contacttype': { '$not' : '100000002' }
          }
        }, {
          '$unwind': {
            'path': '$bhs_contact_bhs_thema_final',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$unwind': {
            'path': '$adx_webrole_contact',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$project': {
            'firstname': 1,
            'middlename': 1,
            'lastname': 1,
            'emailaddress1': 1,
            'jobtitle': 1,
            'department': 1,
            'crmrd_linkedinid': 1,
            'bhs_typelid': 1,
            'bhs_profieltype': 1,
            'lcb_Profielafbeelding': 1,
            'webrol': '$adx_webrole_contact.adx_name',
            'themavoorkeur': '$bhs_contact_bhs_thema_final.bhs_name'
          }
        }, {
          '$group': {
            '_id': '$_id',
            'firstname': {
              '$first': '$firstname'
            },
            'middlename': {
              '$first': '$middlename'
            },
            'lastname': {
              '$first': '$lastname'
            },
            'emailaddress1': {
              '$first': '$emailaddress1'
            },
            'jobtitle': {
              '$first': '$jobtitle'
            },
            'department': {
              '$first': '$department'
            },
            'crmrd_linkedinid': {
              '$first': '$crmrd_linkedinid'
            },
            'bhs_typelid': {
              '$first': '$bhs_typelid'
            },
            'bhs_profieltype': {
              '$first': '$bhs_profieltype'
            },
            'lcb_Profielafbeelding': {
              '$first': '$lcb_Profielafbeelding'
            },
            'themavoorkeuren': {
              '$push': '$themavoorkeur'
            },
            'webrol': {
              '$addToSet': '$webrol'
            }
          }
        }
      ]})

    //CrmFiles
    await this.connection.dropCollection('DynamicsFiles')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('DynamicsFiles', {
      viewOn: 'afbeeldingen', pipeline: [
        {
          $project: {_id: 1, msdyncrm_blobcdnuri: 1, msdyncrm_name: 1}
        }
      ]
    })

    //Agenda
    await this.connection.dropCollection('AgendaOverzicht')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('AgendaOverzicht', {viewOn: 'agenda', pipeline:[
        {
          $match: { msevtmgt_eventstartdate: { $gte: new Date() } }
        },
        {
          $lookup: {
            from: 'DynamicsFiles',
            localField: '_bhs_gebeurtenisblockafbeelding_value',
            foreignField: '_id',
            as: 'banner'
          }
        },
        {
          $unwind: {
            path: '$banner'
          }
        },
        {
          $project: {
            msevtmgt_name:1,
            msevtmgt_eventid:1,
            msevtmgt_readableeventid:1,
            msevtmgt_building:1,
            msevtmgt_eventstartdate:1,
            msevtmgt_publiceventurl:1,
            msevtmgt_customeventurl:1,
            'banner.msdyncrm_blobcdnuri': 1,
            'banner.msdyncrm_name' : 1
          }
        },
        {
          $sort:{ msevtmgt_eventstartdate: 1}

        }
      ]})

    await this.connection.dropCollection('AgendaDetail')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('AgendaDetail', {viewOn:'agendas',pipeline:[
        {
          $match: { msevtmgt_eventstartdate: { $gte: new Date() } }
        },
        {
          $project: {
            '_id': 1,
            'msevtmgt_eventstartdate': 1,
            'msevtmgt_name': 1,
            'msevtmgt_readableeventid': 1,
            'bhs_eventomschrijving': 1,
            'msevtmgt_building': 1,
            'bhs_prijsevenement': 1
          }
        }
      ]})

    //Nieuws
    await this.connection.dropCollection('NieuwsOverzicht')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('NieuwsOverzicht', {
      viewOn: 'nieuws', pipeline: [
        {
          $match: {
            bhs_gepubliceerd: 125810001
          }
        },
        {
          $lookup: {
            from: 'DynamicsFiles',
            localField: '_bhs_nieuwsblockafbeelding_value',
            foreignField: '_id',
            as: 'banner'
          }
        },
        {
          $unwind: {
            path: '$banner',
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $project: {
            //_id: 1,
            bhs_name: 1,
            bhs_korteomschrijving: 1,
            bhs_datumnieuws: 1,
            'banner.msdyncrm_blobcdnuri': 1,
            'banner.msdyncrm_name' : 1
          }
        },
        {
          $sort: {
            bhs_datumnieuws: -1
          }
        },



      ]
    })

    await this.connection.dropCollection('NieuwsDetail')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('NieuwsDetail', {
      viewOn: 'nieuws', pipeline: [
        //Header
        {
          $lookup:{
            from: 'DynamicsFiles',
            localField: '_bhs_nieuwsafbeelding_value',
            foreignField: '_id',
            as: 'header'
          }
        },
        {
          $unwind:{
            path:'$header',
            preserveNullAndEmptyArrays: true
          }
        },
        // Contactpersoon
        {
          $lookup:{
            from: 'Contactpersonen',
            localField: '_lcb_nieuwscontactpersoon_value',
            foreignField: '_id',
            as: 'contactpersoon'
          }
        },
        {
          $unwind:{
            path:'$contactpersoon',
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $project:{
            _id:1,
            bhs_name:1,
            bhs_datumnieuws:1,
            bhs_externewebsite:1,
            bhs_urlexternewebsite:1,
            header:1,
            contactpersoon:1,
            bhs_tekstnieuwsvoorcontrole:1
          }
        }
      ]
    })

    //Projecten
    await this.connection.dropCollection('ProjectOverzicht')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('ProjectOverzicht', {
      viewOn: 'projecten', pipeline: [
        {
          $lookup: {
            from: 'DynamicsFiles',
            localField: '_bhs_projectblockafbeelding_value',
            foreignField: '_id',
            as: 'banner'
          }
        },
        {
          $unwind: {
            path: '$banner'
          }
        },
        {
          $project: {
            _id: 1,
            bhs_name: 1,
            bhs_korteomschrijving: 1,
            bhs_externewebsite: 1,
            bhs_urlexternewebsite: 1,
            'banner.msdyncrm_blobcdnuri': 1,
            'banner.msdyncrm_name' : 1
          }
        },
      ]
    })

    //Projecten
    await this.connection.dropCollection('ProjectDetail')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('ProjectDetail', {
      viewOn: 'projecten', pipeline: [
        {
          '$lookup': {
            'from': 'DynamicsFiles',
            'localField': '_lcb_projectafbeelding_value',
            'foreignField': '_id',
            'as': 'banner'
          }
        }, {
          '$unwind': {
            'path': '$banner',
            'preserveNullAndEmptyArrays': false
          }
        }, {
          '$project': {
            'bhs_name': 1,
            'bhs_projectomschrijving': 1,
            'bhs_externewebsite': 1,
            'bhs_urlexternewebsite': 1,
            'bhs_urlteams': 1,
            'banner': 1
          }
        }
      ]
    })

    //Themas
    await this.connection.dropCollection('ThemaOverzicht')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('ThemaOverzicht', {
      viewOn: 'themas', pipeline: [
        {
          $lookup: {
            from: 'DynamicsFiles',
            localField: '_lcb_themablockafbeelding_value',
            foreignField: '_id',
            as: 'banner'
          }
        },
        {
          $unwind: {
            path: '$banner'
          }
        },
        {
          $project: {
            _id: 1,
            bhs_name: 1,
            bhs_korteomschrijving: 1,
            'banner.msdyncrm_blobcdnuri': 1,
            'banner.msdyncrm_name' : 1
          }
        },

      ]
    })

    await this.connection.dropCollection('ThemaDetail')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('ThemaDetail', {
      viewOn: 'themas', pipeline: [
        // Nieuws join
        {
          $lookup: {
            from: 'NieuwsOverzicht',
            localField: 'bhs_bhs_thema_bhs_nieuws.bhs_nieuwsid',
            foreignField: '_id',
            as: 'nieuws'
          }
        },
        // Projecten join
        {
          $lookup: {
            from: 'ProjectOverzicht',
            localField: 'bhs_bhs_thema_bhs_project_Thema.bhs_projectid',
            foreignField: '_id',
            as: 'projecten'

          }
        },
        //Specialisten join
        {
          $lookup: {
            from: 'Contactpersonen',
            localField: 'bhs_thema_contact_specialisten.contactid',
            foreignField: '_id',
            as: 'specialisten'

          }
        },
        //Agenda items
        {
          $lookup: {
            from: 'AgendaOverzicht',
            localField:'bhs_bhs_thema_msevtmgt_event.msevtmgt_eventid',
            foreignField: '_id',
            as: 'evenementen'
          }
        },
        //Banner
        {
          $lookup: {
            from: 'DynamicsFiles',
            localField: '_lcb_themaafbeelding_value',
            foreignField: '_id',
            as: 'banner'
          }
        },
        {
          $unwind: {
            path: '$banner',
            preserveNullAndEmptyArrays: false
          }
        },
        // Documenten
        {
          $lookup: {
            from: 'Documenten',
            let: {"themaID": "$_id"},
            pipeline: [
              {
                "$match": {
                  "$expr": {
                    "$in": ["$$themaID", "$themas"],
                  },
                },
              },
            ],
            as:'documenten'
          }
        },
        //Project
        {
          $project: {
            '_id': 1,
            'bhs_name': 1,
            'bhs_omschrijving': 1,
            'bhs_together': 1,
            'bhs_today': 1,
            'bhs_tomorrow': 1,
            'bhs_externewebsite': 1,
            'bhs_urlexternewebsite': 1,
            'bhs_emailadres': 1,
            "nieuws": { "$slice": ["$nieuws",0,3]  },
            'projecten': 1,
            'banner': 1,
            'specialisten': 1,
            'evenementen':1,
            'documenten':1

          }
        },

      ]
    })

    // Documenten

    await this.connection.dropCollection('Documenten')
        .catch(error => { console.log('Collection didnt exist')})
    await this.connection.createCollection('Documenten', {
          viewOn: 'documenten', pipeline: [
                  {
                    $project: {
                      "lcb_omschrijving": 1,
                      "lcb_name": 1,
                      "lcb_youtubeurl": 1,
                      "lcb_typedocument": "$lcb_typedocument@OData.Community.Display.V1.FormattedValue",
                      "lcb_openbaar": "$lcb_openbaar@OData.Community.Display.V1.FormattedValue",
                      "statecode": "$statecode@OData.Community.Display.V1.FormattedValue",
                      "lcb_DocumentAfbeelding": "$lcb_DocumentAfbeelding.msdyncrm_blobcdnuri",
                      "lcb_documenten_Annotations": 1,
                      "themas": "$lcb_Documenten_bhs_thema_bhs_thema.bhs_themaid",
                      "projecten": "$lcb_Documenten_bhs_project_bhs_project.bhs_projectid"
                    }
                  },
          // Remove document body
                  {
                    $project: {
                      "lcb_documenten_Annotations.documentbody": 0
                    }
                  }
      ]})
  }
}
