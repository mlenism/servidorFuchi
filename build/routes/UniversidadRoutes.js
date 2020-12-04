"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UniversidadController_1 = __importDefault(require("../controllers/UniversidadController"));
class UniversidadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', UniversidadController_1.default.getUniversidades);
    }
}
const universidadRoutes = new UniversidadRoutes();
exports.default = universidadRoutes.router;
