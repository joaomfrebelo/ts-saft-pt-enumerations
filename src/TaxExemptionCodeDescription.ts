import { TaxExemptionCode } from "./TaxExemptionCode";

/**
 * Tax exemption code description
 * @since 1.0.0
 */
export class TaxExemptionCodeDescription {

  /**
   * Mention appearing on the invoice
   * @param taxExemptionCode
   * @since 1.0.0
   */
  public static getMentionOnInvoice(taxExemptionCode: TaxExemptionCode): string{
    switch (taxExemptionCode) {
      case TaxExemptionCode.M01:
        return "Artigo 16.º, n.º 6 do CIVA";
      case TaxExemptionCode.M02:
        return "Artigo 6.º do Decreto-Lei n.º 198/90, de 19 de junho";
      case TaxExemptionCode.M04:
        return "Isento artigo 13.º do CIVA";
      case TaxExemptionCode.M05:
        return "Isento artigo 14.º do CIVA";
      case TaxExemptionCode.M06:
        return "Isento artigo 15.º do CIVA";
      case TaxExemptionCode.M07:
        return "Isento artigo 9.º do CIVA";
      case TaxExemptionCode.M08:
        return "IVA – autoliquidação";
      case TaxExemptionCode.M09:
        return "IVA - não confere direito a dedução";
      case TaxExemptionCode.M10:
        return "IVA – regime de isenção";
      case TaxExemptionCode.M11:
        return "Regime particular do tabaco";
      case TaxExemptionCode.M12:
        return "Regime da margem de lucro – Agências de viagens";
      case TaxExemptionCode.M13:
        return "Regime da margem de lucro – Bens em segunda mão";
      case TaxExemptionCode.M14:
        return "Regime da margem de lucro – Objetos de arte";
      case TaxExemptionCode.M15:
        return "Regime da margem de lucro – Objetos de coleção e antiguidades";
      case TaxExemptionCode.M16:
        return "Isento artigo 14.º do RITI";
      case TaxExemptionCode.M19:
        return "Outras isenções";
      case TaxExemptionCode.M20:
        return "IVA - regime forfetário";
      case TaxExemptionCode.M21:
        return "IVA – não confere direito à dedução (ou expressão similar)";
      case TaxExemptionCode.M25:
        return "Mercadorias à consignação";
      case TaxExemptionCode.M30:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M31:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M32:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M33:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M40:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M41:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M42:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M43:
        return "IVA - autoliquidação";
      case TaxExemptionCode.M99:
        return "Não sujeito ou não tributado";
      default:
        throw new Error("Not exist tax exemption code");
    }
  }

  /**
   * Applicable standard
   * @param taxExemptionCode
   * @since 1.0.0
   */
  public static getApplicableLawStandard(taxExemptionCode: TaxExemptionCode): string {
    switch (taxExemptionCode) {
      case TaxExemptionCode.M01:
        return "Artigo 16.º, n.º 6, alíneas a) a d) do CIVA";
      case TaxExemptionCode.M02:
        return "Artigo 6.º do Decreto‐Lei n.º 198/90, de 19 de junho";
      case TaxExemptionCode.M04:
        return "Artigo 13.º do CIVA";
      case TaxExemptionCode.M05:
        return "Artigo 14.º do CIVA";
      case TaxExemptionCode.M06:
        return "Artigo 15.º do CIVA";
      case TaxExemptionCode.M07:
        return "Artigo 9.º do CIVA";
      case TaxExemptionCode.M08:
        return "Artigo 2.º n.º 1 alínea i), j) ou l) do CIVA; Artigo 6.º do CIVA; Decreto-Lei n.º 21/2007, de 29 de janeiro; Decreto-Lei n.º 362/99, de 16 de setembro;";
      case TaxExemptionCode.M09:
        return "Artigo 62.º alínea b) do CIVA";
      case TaxExemptionCode.M10:
        return "Artigo 57.º do CIVA";
      case TaxExemptionCode.M11:
        return "Decreto-Lei n.º 346/85, de 23 de agosto";
      case TaxExemptionCode.M12:
        return "Decreto-Lei n.º 221/85, de 3 de julho";
      case TaxExemptionCode.M13:
        return "Decreto-Lei n.º 199/96, de 18 de outubro";
      case TaxExemptionCode.M14:
        return "Decreto-Lei n.º 199/96, de 18 de outubro";
      case TaxExemptionCode.M15:
        return "Decreto-Lei n.º 199/96, de 18 de outubro";
      case TaxExemptionCode.M16:
        return "Artigo 14.º do RITI";
      case TaxExemptionCode.M19:
        return "Isenções temporárias determinadas em diploma próprio";
      case TaxExemptionCode.M20:
        return "Artigo 59.º-D n.º2 do CIVA";
      case TaxExemptionCode.M21:
        return "Artigo 72.º n.º 4 do CIVA";
      case TaxExemptionCode.M25:
        return "Artigo 38.º n.º 1 alínea a)";
      case TaxExemptionCode.M30:
        return "Artigo 2.º n.º 1 alínea i) do CIVA";
      case TaxExemptionCode.M31:
        return "Artigo 2.º n.º 1 alínea j) do CIVA";
      case TaxExemptionCode.M32:
        return "Artigo 2.º n.º 1 alínea l) do CIVA";
      case TaxExemptionCode.M33:
        return "Artigo 2.º n.º 1 alínea m) do CIVA";
      case TaxExemptionCode.M40:
        return "Artigo 6.º n.º 6 alínea a) do CIVA, a contrário";
      case TaxExemptionCode.M41:
        return "Artigo 8.º n.º 3 do RITI";
      case TaxExemptionCode.M42:
        return "Decreto-Lei n.º 21/2007, de 29 de janeiro";
      case TaxExemptionCode.M43:
        return "Decreto-Lei n.º 362/99, de 16 de setembro";
      case TaxExemptionCode.M99:
        return "Outras situações de não liquidação do imposto (Exemplos: artigo 2.º, n.º 2 ; artigo 3.º, n.ºs 4, 6 e 7; artigo 4.º, n.º 5, todos do CIVA";
      default:
        throw new Error("Not exist tax exemption code");
    }
  }

}