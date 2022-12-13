import { Component, OnInit } from '@angular/core';
import {ThemaService} from "../../@shared/services/thema.service";
import {NieuwsService} from "../../@shared/services/nieuws.service";
import {AgendaService} from "../../@shared/services/agenda.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss',
  // '../../../assets/scss/_user.scss',
]
})
export class HomepageComponent implements OnInit {


  constructor(
      private themaService: ThemaService,
      private nieuwsService: NieuwsService,
      private agendaService: AgendaService,
    ) { }

  themas:any;
  nieuws:any;
  agendas:any;


  T: any = {
    "@odata.context": "https://lcb-test.microsoftcrmportals.com/_api/$metadata#bhs_themas(bhs_name,bhs_korteomschrijving,lcb_Themaafbeelding(msdyncrm_blobcdnuri),lcb_Themablockafbeelding(msdyncrm_blobcdnuri))",
    "@Microsoft.Dynamics.CRM.totalrecordcount": -1,
    "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
    "value": [
      {
        "@odata.etag": "W/\"49281469\"",
        "bhs_name": "Test thema Simon API",
        "bhs_korteomschrijving": null,
        "bhs_themaid": "1a1b0052-c964-eb11-a812-000d3ad7d6da",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/0240ba4c-1db3-eb11-8236-000d3adbfa16/5F8Y7CPufwYDuZhyC8NjvV2JpVbXHYVtECcr9XGZ7wc!",
          "msdyncrm_fileid": "0240ba4c-1db3-eb11-8236-000d3adbfa16"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/c0a74478-c7dc-eb11-bacb-000d3ab35eb0/dk68Tksv9Sz5rqSF6iNZelYmsE5iv2sv4XauiEOam28!",
          "msdyncrm_fileid": "c0a74478-c7dc-eb11-bacb-000d3ab35eb0"
        }
      },
      {
        "@odata.etag": "W/\"46662728\"",
        "bhs_name": "Leefbare Stad",
        "bhs_korteomschrijving": "Brabantse leefbare steden;<br>\nversnellen, verdiepen en verbinden!",
        "bhs_themaid": "7d4d4296-82b4-ea11-a812-000d3ada453a",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/4009973f-4232-ec11-b6e6-000d3ab37d39/zp7WjRKvY1T06Kdqesu7K0KbAwv3_H5ZpAI9cRxZ9LY!",
          "msdyncrm_fileid": "4009973f-4232-ec11-b6e6-000d3ab37d39"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/21ce6b14-cadc-eb11-bacb-000d3ab35eb0/MyGKi5HJYAm0B3p9KhDQffIZtTIfxdQGER19q_uuuto!",
          "msdyncrm_fileid": "21ce6b14-cadc-eb11-bacb-000d3ab35eb0"
        }
      },
      {
        "@odata.etag": "W/\"34052788\"",
        "bhs_name": "Zorglogistiek",
        "bhs_korteomschrijving": "Sed convallis ante nisl, a egestas odio porta a. Morbi quis dui dui. Praesent rhoncus eu dui eu aliquet. Quisque euismod scelerisque tortor, sed aliquet urna tristique at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum condimentum placerat volutpat.",
        "bhs_themaid": "6f61cd8d-85f6-ea11-a815-000d3ada453a",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/0240ba4c-1db3-eb11-8236-000d3adbfa16/5F8Y7CPufwYDuZhyC8NjvV2JpVbXHYVtECcr9XGZ7wc!",
          "msdyncrm_fileid": "0240ba4c-1db3-eb11-8236-000d3adbfa16"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/ed79785d-cadc-eb11-bacb-000d3ab35eb0/XyCejk9-xKKmYWteT2nqPZP_WPE9ybayVgArbbv-NnE!",
          "msdyncrm_fileid": "ed79785d-cadc-eb11-bacb-000d3ab35eb0"
        }
      },
      {
        "@odata.etag": "W/\"44553659\"",
        "bhs_name": "Multimodaal",
        "bhs_korteomschrijving": "Multimodaal transport = voordelen",
        "bhs_themaid": "7ade8a7c-2a02-eb11-a813-000d3ada4f59",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/2077d1d6-8b67-eb11-a812-000d3ad7d7e9/yPNprCGvWVu2L_Mp3I2gp6OStopXgDQZP0118Rie9bE!",
          "msdyncrm_fileid": "2077d1d6-8b67-eb11-a812-000d3ad7d7e9"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/7ed91ef6-c9dc-eb11-bacb-000d3ab35eb0/oXFr6yOr-U11VP32r3coC3UPT9DBQKbUxpVGIXFnTWk!",
          "msdyncrm_fileid": "7ed91ef6-c9dc-eb11-bacb-000d3ab35eb0"
        }
      },
      {
        "@odata.etag": "W/\"44552281\"",
        "bhs_name": "Data Gedreven Logistiek",
        "bhs_korteomschrijving": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "bhs_themaid": "f98d0fe6-ad08-eb11-a813-000d3ada4f59",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/0240ba4c-1db3-eb11-8236-000d3adbfa16/5F8Y7CPufwYDuZhyC8NjvV2JpVbXHYVtECcr9XGZ7wc!",
          "msdyncrm_fileid": "0240ba4c-1db3-eb11-8236-000d3adbfa16"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/c0a74478-c7dc-eb11-bacb-000d3ab35eb0/dk68Tksv9Sz5rqSF6iNZelYmsE5iv2sv4XauiEOam28!",
          "msdyncrm_fileid": "c0a74478-c7dc-eb11-bacb-000d3ab35eb0"
        }
      },
      {
        "@odata.etag": "W/\"34052547\"",
        "bhs_name": "Evenementen Logistiek",
        "bhs_korteomschrijving": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "bhs_themaid": "6d1a4189-070a-eb11-a813-000d3ada4f59",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/0240ba4c-1db3-eb11-8236-000d3adbfa16/5F8Y7CPufwYDuZhyC8NjvV2JpVbXHYVtECcr9XGZ7wc!",
          "msdyncrm_fileid": "0240ba4c-1db3-eb11-8236-000d3adbfa16"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/7ed91ef6-c9dc-eb11-bacb-000d3ab35eb0/oXFr6yOr-U11VP32r3coC3UPT9DBQKbUxpVGIXFnTWk!",
          "msdyncrm_fileid": "7ed91ef6-c9dc-eb11-bacb-000d3ab35eb0"
        }
      },
      {
        "@odata.etag": "W/\"34052701\"",
        "bhs_name": "Smart Industry",
        "bhs_korteomschrijving": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "bhs_themaid": "39c163ad-070a-eb11-a813-000d3ada4f59",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/0240ba4c-1db3-eb11-8236-000d3adbfa16/5F8Y7CPufwYDuZhyC8NjvV2JpVbXHYVtECcr9XGZ7wc!",
          "msdyncrm_fileid": "0240ba4c-1db3-eb11-8236-000d3adbfa16"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/9a4a4845-cadc-eb11-bacb-000d3ab35eb0/SGjWkNHJq1LJpijSZLSoSu7518-t30QzQ1mPopr1ORc!",
          "msdyncrm_fileid": "9a4a4845-cadc-eb11-bacb-000d3ab35eb0"
        }
      },
      {
        "@odata.etag": "W/\"49591436\"",
        "bhs_name": "Leefbare Stad 2",
        "bhs_korteomschrijving": "Brabantse leefbare steden; \nversnellen, verdiepen en verbinden!",
        "bhs_themaid": "37667e89-2172-ec11-8943-000d3ade34db",
        "lcb_Themaafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/296cd612-0788-ec11-93b0-000d3ab6e399/EepamSTEUOnpCYshfSfjTK-DXXMaJoAa7Vquj-U0z9c!",
          "msdyncrm_fileid": "296cd612-0788-ec11-93b0-000d3ab6e399"
        },
        "lcb_Themablockafbeelding": {
          "msdyncrm_blobcdnuri": "https://mktdplp102neda.azureedge.net/org-c6e9ed9dbeda4108b727be010f53519e/ea08cf17-013b-ec11-b6e5-000d3ab2b71c/u1xElvN3HWBcc6T6oqRd8QFxYv8GSPzuRJ4FQ7yFrkY!",
          "msdyncrm_fileid": "ea08cf17-013b-ec11-b6e5-000d3ab2b71c"
        }
      }
    ]
  }

  ngOnInit(): void {
    this.nieuws = this.nieuwsService.nieuwsOverview()
    this.themas = this.themaService.themaOverview()


    this.themaService.themaOverview().subscribe(T => {
      console.log(T)
    })
    this.nieuwsService.nieuwsOverview().subscribe( N => {
      console.log(N)
    })
    this.agendaService.agendaOverview().subscribe( A => {
      console.log(A)
      this.agendas = A
    })
  }

}
