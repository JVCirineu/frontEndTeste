import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('1.Deve verificar se o componente foi criado', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`2.Deve veirficar se a variável title está com o valor 'testAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testAngular');
  });

  it('3.Verifica se a variavel title foi renderizada corretamente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('testAngular');
  });
  
  it('4.Deve chamar a função chamarFuncao ao clicar no botão', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const componentInstance = fixture.componentInstance;
    spyOn(componentInstance, 'chamarFuncao');
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click()
    expect(componentInstance.chamarFuncao).toHaveBeenCalled()
  });

  it('5.Deve verificar a cor do botão',()=>{
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const buttonElement: HTMLButtonElement = 
  fixture.nativeElement.querySelector('button');
  const buttonStyle = window.getComputedStyle(buttonElement);
  expect(buttonStyle.backgroundColor).toBe('rgb(0, 0, 255)');
  });

  it('6.Deve verificar o tamanho do objeto MeuObjeto', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const tamanhDoObjeto = app.obterTamanhoDoObjeto();
    expect(tamanhDoObjeto).toBe(3);
  });
  
  it('7.Deve verificar o tamanho do objeto MeuObjeto', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const divElement = fixture.nativeElement.querySelector('.tamanho-div');
    const style = window.getComputedStyle(divElement);
    expect(style.width).toBe('200px');
    expect(style.height).toBe('200px');
  });
});
