/**
 * Copyright (c) { datetime: '2014-2015 Koninklij'k steps: e Philips N.V.},
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Philips HTML5 Angular Application
 *
 * This file contains the constants used throughout the application.
 */

var CLIENT_ID = "0gDOK0PZFQJwIwX75zY9Ncppqa8nbmQo"; // Retrieve this key from the developer portal
var CLIENT_SECRET = "JQutDLaqgJBG8x3k"; // Retrieve this key also from the developer portal

var BASE_URL = "https://gateway.api.pcftest.com:9004"; // HTTPS url
var BASE_URL_GET_TOKEN = BASE_URL + "/v1/oauth2/token?grant_type=client_credentials";
var BASE_URL_LOGIN = BASE_URL + "/v1/oauth2/authorize/login";
var BASE_URL_LOGOUT = BASE_URL + "/v1/oauth2/authorize/logout";
var BASE_FHIR_INFO_URL = BASE_URL + "/v1/fhir_rest";
var BASE_URL_PATIENT = BASE_FHIR_INFO_URL + "/Patient/";
var BASE_URL_ORGANIZATION = BASE_FHIR_INFO_URL + "/Organization/";
var BASE_URL_OBSERVATION = BASE_FHIR_INFO_URL + "/Observation";

var WEIGHT_LOINC = "3141-9";
var BLOOD_PRESSURE_LOINC = "55284-4";
var SYSTOLIC_BLOOD_PRESSURE_LOINC = "8480-6";
var DIASTOLIC_BLOOD_PRESSURE_LOINC = "8462-4";
var MEAN_BLOOD_PRESSURE_LOINC = "8478-0";
var STEP_LOINC = "41950-7";
var GLUCOSE_LOINC = "2339-0";
var BODY_WEIGHT_LOINC = "3141-9";
var BODY_TEMPERATURE_LIONC = "8310-5";
var MOOD_LIONC = "52497-5";
var GLYCATED_HEMOGLOBIN_LIONC = "4548-4";
var PROTHROMBIN_TIME_LIONC = "5902-2";
var HEART_RATE_LIONC = "8867-4";
var PULSE_OXIMETRY_LIONC = "8889-8";
var SPO2_LIONC = "59408-5";
var TELEHEALTH_NOTE_LIONC = "75496-0";
var DIAGNOSIS_LIONC = "29308-4";

var STATIC_STEP_DATA = [{
	datetime: '2014-12-24 00:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 01:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 02:00:00',
	steps: 25
}, {
	datetime: '2014-12-24 03:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 04:00:00',
	steps: 24
}, {
	datetime: '2014-12-24 05:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 06:00:00',
	steps: 289
}, {
	datetime: '2014-12-24 07:00:00',
	steps: 353
}, {
	datetime: '2014-12-24 08:00:00',
	steps: 242
}, {
	datetime: '2014-12-24 09:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 10:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 11:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 12:00:00',
	steps: 246
}, {
	datetime: '2014-12-24 13:00:00',
	steps: 169
}, {
	datetime: '2014-12-24 14:00:00',
	steps: 221
}, {
	datetime: '2014-12-24 15:00:00',
	steps: 368
}, {
	datetime: '2014-12-24 16:00:00',
	steps: 259
}, {
	datetime: '2014-12-24 17:00:00',
	steps: 190
}, {
	datetime: '2014-12-24 18:00:00',
	steps: 342
}, {
	datetime: '2014-12-24 19:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 20:00:00',
	steps: 18
}, {
	datetime: '2014-12-24 21:00:00',
	steps: 0
}, {
	datetime: '2014-12-24 22:00:00',
	steps: 25
}, {
	datetime: '2014-12-24 23:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 00:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 01:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 02:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 03:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 04:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 05:00:00',
	steps: 24
}, {
	datetime: '2014-12-25 06:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 07:00:00',
	steps: 284
}, {
	datetime: '2014-12-25 08:00:00',
	steps: 138
}, {
	datetime: '2014-12-25 09:00:00',
	steps: 294
}, {
	datetime: '2014-12-25 10:00:00',
	steps: 412
}, {
	datetime: '2014-12-25 11:00:00',
	steps: 243
}, {
	datetime: '2014-12-25 12:00:00',
	steps: 154
}, {
	datetime: '2014-12-25 13:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 14:00:00',
	steps: 262
}, {
	datetime: '2014-12-25 15:00:00',
	steps: 241
}, {
	datetime: '2014-12-25 16:00:00',
	steps: 179
}, {
	datetime: '2014-12-25 17:00:00',
	steps: 139
}, {
	datetime: '2014-12-25 18:00:00',
	steps: 274
}, {
	datetime: '2014-12-25 19:00:00',
	steps: 456
}, {
	datetime: '2014-12-25 20:00:00',
	steps: 128
}, {
	datetime: '2014-12-25 21:00:00',
	steps: 0
}, {
	datetime: '2014-12-25 22:00:00',
	steps: 21
}, {
	datetime: '2014-12-25 23:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 00:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 01:00:00',
	steps: 18
}, {
	datetime: '2014-12-26 02:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 03:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 04:00:00',
	steps: 18
}, {
	datetime: '2014-12-26 05:00:00',
	steps: 22
}, {
	datetime: '2014-12-26 06:00:00',
	steps: 189
}, {
	datetime: '2014-12-26 07:00:00',
	steps: 137
}, {
	datetime: '2014-12-26 08:00:00',
	steps: 495
}, {
	datetime: '2014-12-26 09:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 10:00:00',
	steps: 489
}, {
	datetime: '2014-12-26 11:00:00',
	steps: 321
}, {
	datetime: '2014-12-26 12:00:00',
	steps: 300
}, {
	datetime: '2014-12-26 13:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 14:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 15:00:00',
	steps: 381
}, {
	datetime: '2014-12-26 16:00:00',
	steps: 391
}, {
	datetime: '2014-12-26 17:00:00',
	steps: 108
}, {
	datetime: '2014-12-26 18:00:00',
	steps: 18
}, {
	datetime: '2014-12-26 19:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 20:00:00',
	steps: 0
}, {
	datetime: '2014-12-26 21:00:00',
	steps: 23
}, {
	datetime: '2014-12-26 22:00:00',
	steps: 24
}, {
	datetime: '2014-12-26 23:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 00:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 01:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 02:00:00',
	steps: 21
}, {
	datetime: '2014-12-27 03:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 04:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 05:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 06:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 07:00:00',
	steps: 448
}, {
	datetime: '2014-12-27 08:00:00',
	steps: 131
}, {
	datetime: '2014-12-27 09:00:00',
	steps: 356
}, {
	datetime: '2014-12-27 10:00:00',
	steps: 125
}, {
	datetime: '2014-12-27 11:00:00',
	steps: 449
}, {
	datetime: '2014-12-27 12:00:00',
	steps: 0
}, {
	datetime: '2014-12-27 13:00:00',
	steps: 234
}, {
	datetime: '2014-12-27 14:00:00',
	steps: 398
}, {
	datetime: '2014-12-27 15:00:00',
	steps: 171
}, {
	datetime: '2014-12-27 16:00:00',
	steps: 239
}, {
	datetime: '2014-12-27 17:00:00',
	steps: 130
}, {
	datetime: '2014-12-27 18:00:00',
	steps: 493
}, {
	datetime: '2014-12-27 19:00:00',
	steps: 219
}, {
	datetime: '2014-12-27 20:00:00',
	steps: 366
}, {
	datetime: '2014-12-27 21:00:00',
	steps: 17
}, {
	datetime: '2014-12-27 22:00:00',
	steps: 23
}, {
	datetime: '2014-12-27 23:00:00',
	steps: 19
}, {
	datetime: '2014-12-28 00:00:00',
	steps: 0
}, {
	datetime: '2014-12-28 01:00:00',
	steps: 20
}, {
	datetime: '2014-12-28 02:00:00',
	steps: 0
}, {
	datetime: '2014-12-28 03:00:00',
	steps: 25
}, {
	datetime: '2014-12-28 04:00:00',
	steps: 24
}, {
	datetime: '2014-12-28 05:00:00',
	steps: 23
}, {
	datetime: '2014-12-28 06:00:00',
	steps: 0
}, {
	datetime: '2014-12-28 07:00:00',
	steps: 23
}, {
	datetime: '2014-12-28 08:00:00',
	steps: 145
}, {
	datetime: '2014-12-28 09:00:00',
	steps: 128
}, {
	datetime: '2014-12-28 10:00:00',
	steps: 361
}, {
	datetime: '2014-12-28 11:00:00',
	steps: 0
}, {
	datetime: '2014-12-28 12:00:00',
	steps: 241
}, {
	datetime: '2014-12-28 13:00:00',
	steps: 491
}, {
	datetime: '2014-12-28 14:00:00',
	steps: 358
}, {
	datetime: '2014-12-28 15:00:00',
	steps: 302
}, {
	datetime: '2014-12-28 16:00:00',
	steps: 379
}, {
	datetime: '2014-12-28 17:00:00',
	steps: 0
}, {
	datetime: '2014-12-28 18:00:00',
	steps: 447
}, {
	datetime: '2014-12-28 19:00:00',
	steps: 384
}, {
	datetime: '2014-12-28 20:00:00',
	steps: 236
}, {
	datetime: '2014-12-28 21:00:00',
	steps: 23
}, {
	datetime: '2014-12-28 22:00:00',
	steps: 0
}, {
	datetime: '2014-12-28 23:00:00',
	steps: 19
}, {
	datetime: '2014-12-29 00:00:00',
	steps: 16
}, {
	datetime: '2014-12-29 01:00:00',
	steps: 24
}, {
	datetime: '2014-12-29 02:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 03:00:00',
	steps: 24
}, {
	datetime: '2014-12-29 04:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 05:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 06:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 07:00:00',
	steps: 23
}, {
	datetime: '2014-12-29 08:00:00',
	steps: 147
}, {
	datetime: '2014-12-29 09:00:00',
	steps: 107
}, {
	datetime: '2014-12-29 10:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 11:00:00',
	steps: 469
}, {
	datetime: '2014-12-29 12:00:00',
	steps: 421
}, {
	datetime: '2014-12-29 13:00:00',
	steps: 307
}, {
	datetime: '2014-12-29 14:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 15:00:00',
	steps: 135
}, {
	datetime: '2014-12-29 16:00:00',
	steps: 381
}, {
	datetime: '2014-12-29 17:00:00',
	steps: 459
}, {
	datetime: '2014-12-29 18:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 19:00:00',
	steps: 16
}, {
	datetime: '2014-12-29 20:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 21:00:00',
	steps: 25
}, {
	datetime: '2014-12-29 22:00:00',
	steps: 0
}, {
	datetime: '2014-12-29 23:00:00',
	steps: 17
}, {
	datetime: '2014-12-30 00:00:00',
	steps: 22
}, {
	datetime: '2014-12-30 01:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 02:00:00',
	steps: 21
}, {
	datetime: '2014-12-30 03:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 04:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 05:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 06:00:00',
	steps: 366
}, {
	datetime: '2014-12-30 07:00:00',
	steps: 297
}, {
	datetime: '2014-12-30 08:00:00',
	steps: 267
}, {
	datetime: '2014-12-30 09:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 10:00:00',
	steps: 308
}, {
	datetime: '2014-12-30 11:00:00',
	steps: 370
}, {
	datetime: '2014-12-30 12:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 13:00:00',
	steps: 183
}, {
	datetime: '2014-12-30 14:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 15:00:00',
	steps: 148
}, {
	datetime: '2014-12-30 16:00:00',
	steps: 454
}, {
	datetime: '2014-12-30 17:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 18:00:00',
	steps: 282
}, {
	datetime: '2014-12-30 19:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 20:00:00',
	steps: 394
}, {
	datetime: '2014-12-30 21:00:00',
	steps: 404
}, {
	datetime: '2014-12-30 22:00:00',
	steps: 0
}, {
	datetime: '2014-12-30 23:00:00',
	steps: 0
}, {
	datetime: '2014-12-31 00:00:00',
	steps: 0
}, {
	datetime: '2014-12-31 01:00:00',
	steps: 0
}, {
	datetime: '2014-12-31 02:00:00',
	steps: 23
}, {
	datetime: '2014-12-31 03:00:00',
	steps: 0
}, {
	datetime: '2014-12-31 04:00:00',
	steps: 25
}, {
	datetime: '2014-12-31 05:00:00',
	steps: 20
}, {
	datetime: '2014-12-31 06:00:00',
	steps: 24
}, {
	datetime: '2014-12-31 07:00:00',
	steps: 142
}, {
	datetime: '2014-12-31 08:00:00',
	steps: 310
}, {
	datetime: '2014-12-31 09:00:00',
	steps: 398
}, {
	datetime: '2014-12-31 10:00:00',
	steps: 468
}, {
	datetime: '2014-12-31 11:00:00',
	steps: 263
}, {
	datetime: '2014-12-31 12:00:00',
	steps: 416
}, {
	datetime: '2014-12-31 13:00:00',
	steps: 400
}, {
	datetime: '2014-12-31 14:00:00',
	steps: 329
}, {
	datetime: '2014-12-31 15:00:00',
	steps: 498
}, {
	datetime: '2014-12-31 16:00:00',
	steps: 423
}, {
	datetime: '2014-12-31 17:00:00',
	steps: 440
}, {
	datetime: '2014-12-31 18:00:00',
	steps: 241
}, {
	datetime: '2014-12-31 19:00:00',
	steps: 0
}, {
	datetime: '2014-12-31 20:00:00',
	steps: 0
}, {
	datetime: '2014-12-31 21:00:00',
	steps: 0
}, {
	datetime: '2014-12-31 22:00:00',
	steps: 21
}, {
	datetime: '2014-12-31 23:00:00',
	steps: 0
}];