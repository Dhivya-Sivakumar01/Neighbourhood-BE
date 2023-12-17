"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetails = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const residents_model_1 = require("./residents.model");
const apartmentDetails_model_1 = require("./apartmentDetails.model");
let PaymentDetails = class PaymentDetails extends sequelize_typescript_1.Model {
};
exports.PaymentDetails = PaymentDetails;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "paymentId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    (0, sequelize_typescript_1.HasMany)(() => residents_model_1.Residents, { foreignKey: { name: 'residentId' }, sourceKey: 'residentId', as: 'OneToOneResident' }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "residentId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    (0, sequelize_typescript_1.HasMany)(() => apartmentDetails_model_1.ApartmentDetails, { foreignKey: { name: 'apartmentDetailsId' }, sourceKey: 'apartmentDetailsId', as: 'OneToManyApartment' }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "apartmentDetailsId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], PaymentDetails.prototype, "paymentDate", void 0);
exports.PaymentDetails = PaymentDetails = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'PaymentDetails', timestamps: true, paranoid: true })
], PaymentDetails);
//# sourceMappingURL=paymentDetails.model.js.map