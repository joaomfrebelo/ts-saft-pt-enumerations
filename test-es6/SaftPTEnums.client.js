import {Country} from "../src/Country";
import {CurrencyCode} from "../src/CurrencyCode";
import {InvoiceStatus} from "../src/InvoiceStatus";
import {InvoiceType} from "../src/InvoiceType";
import {InvoiceTypeGeneral} from "../src/InvoiceTypeGeneral";
import {InvoiceTypeInsurance} from "../src/InvoiceTypeInsurance";
import {MovementStatus} from "../src/MovementStatus";
import {MovementType} from "../src/MovementType";
import {PaymentMechanism} from "../src/PaymentMechanism";
import {PaymentStatus} from "../src/PaymentStatus";
import {PaymentTaxCode} from "../src/PaymentTaxCode";
import {PaymentType} from "../src/PaymentType";
import {SourceBilling} from "../src/SourceBilling";
import {SupplierCountry} from "../src/SupplierCountry";
import {TaxAccountingBasis} from "../src/TaxAccountingBasis";
import {TaxCode} from "../src/TaxCode";
import {TaxCountryRegion} from "../src/TaxCountryRegion";
import {TaxTableEntryTaxCode} from "../src/TaxTableEntryTaxCode";
import {TaxType} from "../src/TaxType";
import {WithholdingTaxType} from "../src/WithholdingTaxType";
import {WorkStatus} from "../src/WorkStatus";
import {WorkType} from "../src/WorkType";
import { TaxExemptionCode } from "../src/TaxExemptionCode";
import { TaxExemptionCodeDescription } from "../src/TaxExemptionCodeDescription";

QUnit.module('Test enum instances', function () {

    QUnit.test('Country', function (assert) {
        assert.equal(Country.KR, Country.KR);
    });

    QUnit.test('CurrencyCode', function (assert) {
        assert.equal(CurrencyCode.AED, CurrencyCode.AED);
    });

    QUnit.test('InvoiceStatus', function (assert) {
        assert.equal(InvoiceStatus.F, InvoiceStatus.F);
    });

    QUnit.test('InvoiceType', function (assert) {
        assert.equal(InvoiceType.FR, InvoiceType.FR);
    });

    QUnit.test('InvoiceTypeGeneral', function (assert) {
        assert.equal(InvoiceTypeGeneral.FR, InvoiceTypeGeneral.FR);
    });

    QUnit.test('InvoiceTypeInsurance', function (assert) {
        assert.equal(InvoiceTypeInsurance.CS, InvoiceTypeInsurance.CS);
    });

    QUnit.test('MovementStatus', function (assert) {
        assert.equal(MovementStatus.F, MovementStatus.F);
    });

    QUnit.test('MovementType', function (assert) {
        assert.equal(MovementType.GA, MovementType.GA);
    });

    QUnit.test('PaymentMechanism', function (assert) {
        assert.equal(PaymentMechanism.CS, PaymentMechanism.CS);
    });

    QUnit.test('PaymentStatus', function (assert) {
        assert.equal(PaymentStatus.A, PaymentStatus.A);
    });

    QUnit.test('PaymentTaxCode', function (assert) {
        assert.equal(PaymentTaxCode.INT, PaymentTaxCode.INT);
    });

    QUnit.test('PaymentType', function (assert) {
        assert.equal(PaymentType.RC, PaymentType.RC);
    });

    QUnit.test('SourceBilling', function (assert) {
        assert.equal(SourceBilling.I, SourceBilling.I);
    });

    QUnit.test('SupplierCountry', function (assert) {
        assert.equal(SupplierCountry.AD, SupplierCountry.AD);
    });

    QUnit.test('TaxAccountingBases', function (assert) {
        assert.equal(TaxAccountingBasis.I, TaxAccountingBasis.I);
    });

    QUnit.test('TaxCode', function (assert) {
        assert.equal(TaxCode.INT, TaxCode.INT);
    });

    QUnit.test('TaxCountryRegion', function (assert) {
        assert.equal(TaxCountryRegion.AD, TaxCountryRegion.AD);
    });

    QUnit.test('TaxTableEntryCode', function (assert) {
        assert.equal(TaxTableEntryTaxCode.INT, TaxTableEntryTaxCode.INT);
    });

    QUnit.test('TaxType', function (assert) {
        assert.equal(TaxType.IS, TaxType.IS);
    });

    QUnit.test('WithholdingTaxType', function (assert) {
        assert.equal(WithholdingTaxType.IRS, WithholdingTaxType.IRS);
    });

    QUnit.test('WorkStatus', function (assert) {
        assert.equal(WorkStatus.A, WorkStatus.A);
    });

    QUnit.test('WorkType', function (assert) {
        assert.equal(WorkType.CS, WorkType.CS);
    });

    QUnit.test('Description existence of tax exemption code', function (assert) {
        for (let code in TaxExemptionCode) {
            assert.ok(
              TaxExemptionCodeDescription.getApplicableLawStandard(code)
            );
            assert.ok(
              TaxExemptionCodeDescription.getMentionOnInvoice(code)
            );
        }
    });

});