/** serviço responsavel por executar as operações da calculadora
 * @author Amarilio Neto <amarilioneto.an@gmail.com>
 * @since 1.1.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /*define as constantes ultilizadas para identificar as operações de calculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly  DIVISAO: string = '/';
  static readonly  MULTIPLICACAO: string = '*';

  constructor() { }
  /**
   *metodo que calcula uma operação matemática dado dois numeros
   *suporta as operações soma, subtração,divisão e multiplicação
   *
   * @param {number} num1
   * @param {number} num2
   * @param {string} operacao
   * @return {*}  {*}
   * @memberof CalculadoraService
   */
  Calcular(num1: number, num2: number,
    operacao: string): number{
      let resultado: number;//armazena o resultado da operação
      switch(operacao){
        case CalculadoraService.SOMA:
          resultado = num1 + num2;
          break;
        case CalculadoraService.SUBTRACAO:
          resultado = num1 - num2;
          break;
        case CalculadoraService.DIVISAO:
          resultado = num1 / num2;
          break;
        case CalculadoraService.MULTIPLICACAO:
          resultado = num1 * num2;
          break;
          default:
            resultado = 0;
      }
      return resultado;

    }

}
