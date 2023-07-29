"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const itinerarySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    places: [{
            place: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "Place",
                required: true
            },
            date: Date
        }]
});
exports.default = mongoose_1.default.model('Itinerary', itinerarySchema);
