import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testAngular';
  static chamarFuncao(chamarFuncao: any){
    throw new Error('Method not implemented.');
  }
  mensagem: string = 'Nenhuma ação realizada ainda.';
  buttonColor = 'blue';
  chamarFuncao(): void{
    this.mensagem = 'Botão clicado! A função foi chamada com sucesso.';
    console.log('Função chamada ao clicar no botão!');
    this.buttonColor = 'red';
  }

  meuObjeto= {
    chave1: 'valor1',
    chave2: 'valor2',
    chave3: 'valor3',
  };
  
  obterTamanhoDoObjeto(): number {
    return Object.keys(this.meuObjeto).length;
  }
}
