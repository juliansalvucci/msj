import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface ChatType {
  //user: UserType;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  chat$ = new BehaviorSubject<ChatType[]>([
    {
      message: 'MENSAJE 1',
    },
    {
      message: 'MENSAJE 2',
    },
  ]);

  jsonData = new BehaviorSubject<any[]>([
    {
      _id: {
        $oid: "6468ccef76dd823a372d6706"
      },
      display_phone_number: {
        $numberLong: "15550953736"
      },
      phone_number_id: {
        $numberLong: "106470985501627"
      },
      from: {
        $numberLong: "543534214755"
      },
      data: [
        /*
        {
          id: "wamid.HBgNNTQ5MzUzNDIxNDc1NRUCABIYIDFDRThFMUU0ODk2MzAwQzQwNzZDNzlFNjAwMDI4QjNGAA==",
          type: "text",
          timestamp: 1684589809,
          status: [],
          display_phone_number: {
            $numberLong: "15550953736"
          },
          phone_number_id: {
            $numberLong: "106470985501627"
          },
          _id: {
            $oid: "6468ccef76dd823a372d6707"
          }
        },
        */
        {
          id: "wamid.HBgNNTQ5MzUzNDIxNDc1NRUCABEYEjNCNTQ1NkY4NkE2RDRFRUMzRgA=",
          type: "template",
          message: {
            recipient_type: "individual",
            template: {
              name: "hello_world",
              language: {
                code: "en_US"
              },
              components: []
            }
          },
          status: [
            {
              status: "sent",
              timestamp: 1684589856
            },
            {
              status: "delivered",
              timestamp: 1684589856
            },
            {
              status: "read",
              timestamp: 1684589859
            }
          ],
          _id: {
            $oid: "6468cd1c76dd823a372d670e"
          }
        },
        {
          id: "wamid.HBgNNTQ5MzUzNDIxNDc1NRUCABEYEjk3MkJGNkE5QUU0MUM4NzEzMAA=",
          type: "template",
          message: {
            recipient_type: "individual",
            template: {
              name: "hello_world",
              language: {
                code: "en_US"
              },
              components: []
            }
          },
          status: [
            {
              status: "sent",
              timestamp: 1684590578
            },
            {
              status: "delivered",
              timestamp: 1684590579
            },
            {
              status: "read",
              timestamp: 1684590604
            }
          ],
          _id: {
            $oid: "6468cff076dd823a372d6745"
          }
        },
      ],
      "__v": 0
    }
  ]);
}
