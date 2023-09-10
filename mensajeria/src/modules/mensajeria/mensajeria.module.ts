import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListamensajesComponent } from './listamensajes/listamensajes.component';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [ListamensajesComponent, ChatComponent],
  imports: [CommonModule, SharedModule],
  exports: [ListamensajesComponent, ChatComponent],
})
export class MensajeriaModule {}
