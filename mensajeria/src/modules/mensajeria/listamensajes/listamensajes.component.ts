import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface UserType {
  name: string;
  avatar: string;
  slogan: string;
  id: string;
}

interface ChatType {
  //user: UserType;
  message: string;
}

@Component({
  selector: 'app-listamensajes',
  templateUrl: './listamensajes.component.html',
  styleUrls: ['./listamensajes.component.css'],
})
export class ListamensajesComponent {
  constructor() { }

  users$ = new BehaviorSubject<UserType[]>([
    {
      name: '+54 351 1234-5678',
      slogan: 'Carlos Colaso',
      avatar: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
      id: 'ts',
    },
    {
      name: '+54 351 9876-5432',
      slogan: 'Judith Meles',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
      id: 'js',
    },
    {
      name: '+54 351 5555-5555',
      slogan: 'Ignacio Favro',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      id: 'angular',
    },
    {
      name: '+54 351 4567-8901',
      slogan: 'Sebastian Mussetta',
      avatar:
        'https://www.secret-source.eu/wp-content/uploads/2017/11/node-js-logo.jpg',
      id: 'nodejs',
    },
    {
      name: '+54 351 2345-6789',
      slogan: 'Valeria Ortiz Quiroz',
      avatar:
        'https://symbols.getvecta.com/stencil_89/37_nestjs-icon.a67daec196.jpg',
      id: 'nodejs',
    },
    {
      name: '+54 351 8765-4321',
      slogan: 'Paula Toselli',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
      id: 'reactjs',
    },
  ]);

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
    },
    {
      _id: {
        $oid: "6468ccef76dd823a372d6706"
      },
      display_phone_number: {
        $numberLong: "15550954444"
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
