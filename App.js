import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Eye, Filter, X, Package, Wine, Users, Home, Database, Archive, BookOpen, MapPin, Calendar, Award, FlaskConical } from 'lucide-react';

// === ДАННЫЕ ИЗ ВСЕХ ФАЙЛОВ ===
const data2024 = [
  {
    id: "2024-1",
    sampleName: "Рислинг",
    dateReceived: "2024-09-06",
    department: "",
    terroir: "Евпатория",
    region: "Городской",
    zone: "Западный приморский",
    oldZone: "Западный приморский",
    productType: "вд",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.802,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 7.20,
    sugars: 172.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.16,
    tartaricAcid: 5.10,
    malicAcid: 1.75,
    succinicAcid: 0.00,
    lacticAcid: 0.13,
    aceticAcid: 0.00,
    glycerin: 0.19,
    glucose: 110.92,
    fructose: 105.17,
    ethanol: 0.02,
    chlorides: 0.03,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-2",
    sampleName: "Бастардо М",
    dateReceived: "2024-09-06",
    department: "",
    terroir: "Евпатория",
    region: "Городской",
    zone: "Западный приморский",
    oldZone: "Западный приморский",
    productType: "вд",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.002,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.90,
    sugars: 191.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.21,
    tartaricAcid: 4.21,
    malicAcid: 2.24,
    succinicAcid: 0.00,
    lacticAcid: 0.53,
    aceticAcid: 0.01,
    glycerin: 0.18,
    glucose: 118.85,
    fructose: 106.67,
    ethanol: 0.04,
    chlorides: 0.04,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-3",
    sampleName: "Алиготе",
    dateReceived: "2024-09-10",
    department: "Хранение",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вд",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.994,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 6.30,
    sugars: 234.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.16,
    tartaricAcid: 2.56,
    malicAcid: 2.59,
    succinicAcid: 0.00,
    lacticAcid: 0.26,
    aceticAcid: 0.00,
    glycerin: 0.77,
    glucose: 125.23,
    fructose: 114.07,
    ethanol: 0.05,
    chlorides: 0.20,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-4",
    sampleName: "Алиготе",
    dateReceived: "2024-09-10",
    department: "",
    terroir: "ЮБК",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вд",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.170,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.30,
    sugars: 196.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.11,
    tartaricAcid: 3.97,
    malicAcid: 2.19,
    succinicAcid: 0.00,
    lacticAcid: 0.52,
    aceticAcid: 0.00,
    glycerin: 0.38,
    glucose: 96.59,
    fructose: 90.09,
    ethanol: 0.08,
    chlorides: 0.03,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-5",
    sampleName: "Мерло",
    dateReceived: "2024-09-11",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вд",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.065,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 6.00,
    sugars: 250.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.08,
    tartaricAcid: 4.40,
    malicAcid: 1.49,
    succinicAcid: 0.00,
    lacticAcid: 0.07,
    aceticAcid: 0.00,
    glycerin: 0.23,
    glucose: 129.99,
    fructose: 113.19,
    ethanol: 0.06,
    chlorides: 0.02,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-6",
    sampleName: "Красень",
    dateReceived: "2024-09-13",
    department: "",
    terroir: "ЮБК",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вд",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.047,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.30,
    sugars: 204.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.05,
    tartaricAcid: 5.01,
    malicAcid: 0.85,
    succinicAcid: 0.00,
    lacticAcid: 0.09,
    aceticAcid: 0.00,
    glycerin: 0.51,
    glucose: 106.44,
    fructose: 100.23,
    ethanol: 0.02,
    chlorides: 0.03,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-7",
    sampleName: "Ркацители",
    dateReceived: "2024-09-20",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вд",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.007,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 6.40,
    sugars: 234.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.22,
    tartaricAcid: 5.92,
    malicAcid: 1.73,
    succinicAcid: 0.00,
    lacticAcid: 0.13,
    aceticAcid: 0.00,
    glycerin: 0.49,
    glucose: 112.54,
    fructose: 111.29,
    ethanol: 0.11,
    chlorides: 0.02,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-w-1",
    sampleName: "Рислинг",
    dateReceived: "2025-01-14",
    department: "",
    terroir: "Евпатория",
    region: "Городской",
    zone: "Западный приморский",
    oldZone: "Западный приморский",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 10.4,
    alcoholDistillation: 11.9,
    ph: 2.450,
    totalExtract: 19,
    adjustedExtract: 17.4,
    residualExtract: 9.5,
    titratableAcidity: 7.90,
    sugars: 0.5,
    biotics: 1.60,
    totalSO2: 120,
    freeSO2: 35,
    citricAcid: 0.13,
    tartaricAcid: 4.12,
    malicAcid: 0.81,
    succinicAcid: 0.48,
    lacticAcid: 0.81,
    aceticAcid: 0.22,
    glycerin: 0.61,
    glucose: 3.85,
    fructose: 1.11,
    ethanol: 5.61,
    chlorides: 11.10,
    calcium: 16,
    potassium: 89,
    phenolicCompounds: 333,
    polymericPhenolics: 49,
    bufferCapacity: 1343,
    conductivity: null
  },
  {
    id: "2024-w-2",
    sampleName: "Бастардо М",
    dateReceived: "2025-01-14",
    department: "",
    terroir: "Евпатория",
    region: "Городской",
    zone: "Западный приморский",
    oldZone: "Западный приморский",
    productType: "вино",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: 12.9,
    alcoholDistillation: 12.7,
    ph: 3.127,
    totalExtract: 24.5,
    adjustedExtract: 23.1,
    residualExtract: 17.8,
    titratableAcidity: 5.30,
    sugars: 0.2,
    biotics: 1.40,
    totalSO2: 147,
    freeSO2: 18,
    citricAcid: 0.42,
    tartaricAcid: 1.93,
    malicAcid: 1.22,
    succinicAcid: 0.88,
    lacticAcid: 1.50,
    aceticAcid: 0.04,
    glycerin: 1.13,
    glucose: 1.54,
    fructose: 1.08,
    ethanol: 9.09,
    chlorides: 12.63,
    calcium: 24,
    potassium: 90,
    phenolicCompounds: 2217,
    polymericPhenolics: 40,
    bufferCapacity: 1799,
    conductivity: null
  },
  {
    id: "2024-w-3",
    sampleName: "Алиготе",
    dateReceived: "2025-01-14",
    department: "Хранение",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 9.7,
    alcoholDistillation: 10.2,
    ph: 2.630,
    totalExtract: 38.3,
    adjustedExtract: 20.7,
    residualExtract: 13.9,
    titratableAcidity: 6.80,
    sugars: 0.66,
    biotics: 17.60,
    totalSO2: 148,
    freeSO2: 35,
    citricAcid: 0.24,
    tartaricAcid: 3.39,
    malicAcid: 1.40,
    succinicAcid: 0.44,
    lacticAcid: 0.63,
    aceticAcid: 0.30,
    glycerin: 0.88,
    glucose: 5.75,
    fructose: 19.47,
    ethanol: 6.89,
    chlorides: 10.11,
    calcium: 16,
    potassium: 171,
    phenolicCompounds: 342,
    polymericPhenolics: 44,
    bufferCapacity: 1435,
    conductivity: null
  },
  {
    id: "2024-w-4",
    sampleName: "Алиготе",
    dateReceived: "2025-01-14",
    department: "",
    terroir: "ЮБК",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 10.60,
    alcoholDistillation: 12.1,
    ph: 2.610,
    totalExtract: 19.6,
    adjustedExtract: 14.9,
    residualExtract: 9.9,
    titratableAcidity: 5.00,
    sugars: 0.6,
    biotics: 4.70,
    totalSO2: 156,
    freeSO2: 41,
    citricAcid: 0.06,
    tartaricAcid: 2.09,
    malicAcid: 0.78,
    succinicAcid: 0.43,
    lacticAcid: 1.18,
    aceticAcid: 0.26,
    glycerin: 0.59,
    glucose: 2.10,
    fructose: 4.29,
    ethanol: 5.15,
    chlorides: 11.95,
    calcium: 8,
    potassium: 72,
    phenolicCompounds: 227,
    polymericPhenolics: 33,
    bufferCapacity: 1155,
    conductivity: null
  },
  {
    id: "2024-w-5",
    sampleName: "Мерло",
    dateReceived: "2025-01-14",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: 12.20,
    alcoholDistillation: 12.7,
    ph: 2.750,
    totalExtract: 41.3,
    adjustedExtract: 36.4,
    residualExtract: 30.7,
    titratableAcidity: 5.70,
    sugars: 0.6,
    biotics: 4.90,
    totalSO2: 82,
    freeSO2: 7,
    citricAcid: 0.11,
    tartaricAcid: 2.45,
    malicAcid: 1.00,
    succinicAcid: 0.65,
    lacticAcid: 0.65,
    aceticAcid: 0.31,
    glycerin: 0.89,
    glucose: 4.26,
    fructose: 18.46,
    ethanol: 7.66,
    chlorides: 12.20,
    calcium: 16,
    potassium: 109,
    phenolicCompounds: 1463,
    polymericPhenolics: 41,
    bufferCapacity: 1286,
    conductivity: null
  },
  {
    id: "2024-w-6",
    sampleName: "Красень",
    dateReceived: "2025-01-14",
    department: "",
    terroir: "ЮБК",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вино",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: 12.20,
    alcoholDistillation: 11.8,
    ph: 2.480,
    totalExtract: 24.2,
    adjustedExtract: 22.6,
    residualExtract: 16.6,
    titratableAcidity: 6.00,
    sugars: 0.4,
    biotics: 1.60,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.09,
    tartaricAcid: 2.99,
    malicAcid: 0.44,
    succinicAcid: 0.39,
    lacticAcid: 0.58,
    aceticAcid: 0.16,
    glycerin: 1.57,
    glucose: 3.11,
    fructose: 2.54,
    ethanol: 6.33,
    chlorides: 11.66,
    calcium: 32,
    potassium: 160,
    phenolicCompounds: 2891,
    polymericPhenolics: 44,
    bufferCapacity: 1291,
    conductivity: null
  },
  {
    id: "2024-w-7",
    sampleName: "Ркацители",
    dateReceived: "2025-01-14",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 12.40,
    alcoholDistillation: 13.5,
    ph: 2.470,
    totalExtract: 22.4,
    adjustedExtract: 17.5,
    residualExtract: 11.5,
    titratableAcidity: 6.00,
    sugars: 0.3,
    biotics: 4.90,
    totalSO2: 65,
    freeSO2: 17,
    citricAcid: 0.29,
    tartaricAcid: 2.67,
    malicAcid: 0.77,
    succinicAcid: 0.50,
    lacticAcid: 0.52,
    aceticAcid: 0.17,
    glycerin: 0.93,
    glucose: 3.17,
    fructose: 5.18,
    ethanol: 6.77,
    chlorides: 13.36,
    calcium: 8,
    potassium: 265,
    phenolicCompounds: 413,
    polymericPhenolics: 42,
    bufferCapacity: 1103,
    conductivity: null
  },
  {
    id: "2024-w-8",
    sampleName: "Рислинг",
    dateReceived: "2025-03-27",
    department: "",
    terroir: "Евпатория",
    region: "Городской",
    zone: "Западный приморский",
    oldZone: "Западный приморский",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 10.20,
    alcoholDistillation: 11,
    ph: 2.800,
    totalExtract: 19.6,
    adjustedExtract: 16.9,
    residualExtract: 9.1,
    titratableAcidity: 7.80,
    sugars: 0.4,
    biotics: 2.70,
    totalSO2: 65,
    freeSO2: 7,
    citricAcid: 0.11,
    tartaricAcid: 5.90,
    malicAcid: 0.37,
    succinicAcid: 0.57,
    lacticAcid: 1.00,
    aceticAcid: 0.17,
    glycerin: 0.62,
    glucose: 0.35,
    fructose: 1.49,
    ethanol: 5.51,
    chlorides: 10.75,
    calcium: 16,
    potassium: 87,
    phenolicCompounds: 299,
    polymericPhenolics: 40,
    bufferCapacity: 1516,
    conductivity: null
  },
  {
    id: "2024-w-9",
    sampleName: "Бастардо М",
    dateReceived: "2025-03-27",
    department: "",
    terroir: "Евпатория",
    region: "Городской",
    zone: "Западный приморский",
    oldZone: "Западный приморский",
    productType: "вино",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: 12.4,
    alcoholDistillation: 12.8,
    ph: 3.400,
    totalExtract: 26.1,
    adjustedExtract: 23.7,
    residualExtract: 18.3,
    titratableAcidity: 5.40,
    sugars: 0.1,
    biotics: 2.40,
    totalSO2: 105,
    freeSO2: 5,
    citricAcid: 0.12,
    tartaricAcid: 3.16,
    malicAcid: 0.37,
    succinicAcid: 0.87,
    lacticAcid: 1.54,
    aceticAcid: 0.06,
    glycerin: 1.19,
    glucose: 1.23,
    fructose: 1.30,
    ethanol: 8.83,
    chlorides: 12.53,
    calcium: 24,
    potassium: 94,
    phenolicCompounds: 2310,
    polymericPhenolics: 32,
    bufferCapacity: 1958,
    conductivity: null
  },
  {
    id: "2024-w-10",
    sampleName: "Алиготе",
    dateReceived: "2025-03-27",
    department: "Хранение",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 11,
    alcoholDistillation: 11.2,
    ph: 2.940,
    totalExtract: 44.4,
    adjustedExtract: 29.8,
    residualExtract: 23.5,
    titratableAcidity: 6.30,
    sugars: 0.6,
    biotics: 14.20,
    totalSO2: 118,
    freeSO2: 14,
    citricAcid: 0.20,
    tartaricAcid: 3.77,
    malicAcid: 1.60,
    succinicAcid: 0.45,
    lacticAcid: 0.71,
    aceticAcid: 0.13,
    glycerin: 0.65,
    glucose: 6.75,
    fructose: 22.86,
    ethanol: 6.45,
    chlorides: 11.46,
    calcium: 8,
    potassium: 74,
    phenolicCompounds: 215,
    polymericPhenolics: 32,
    bufferCapacity: 1552,
    conductivity: null
  },
  {
    id: "2024-w-11",
    sampleName: "Алиготе",
    dateReceived: "2025-03-27",
    department: "",
    terroir: "ЮБК",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 11.3,
    alcoholDistillation: 12.2,
    ph: 2.970,
    totalExtract: 19,
    adjustedExtract: 14.1,
    residualExtract: 9,
    titratableAcidity: 5.10,
    sugars: 0.5,
    biotics: 4.90,
    totalSO2: 81,
    freeSO2: 7,
    citricAcid: 0.08,
    tartaricAcid: 3.46,
    malicAcid: 0.19,
    succinicAcid: 0.50,
    lacticAcid: 1.33,
    aceticAcid: 0.26,
    glycerin: 0.48,
    glucose: 0.24,
    fructose: 3.94,
    ethanol: 5.08,
    chlorides: 11.99,
    calcium: 8,
    potassium: 52,
    phenolicCompounds: 248,
    polymericPhenolics: 28,
    bufferCapacity: 1366,
    conductivity: null
  },
  {
    id: "2024-w-12",
    sampleName: "Мерло",
    dateReceived: "2025-03-27",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: 12.9,
    alcoholDistillation: 12.8,
    ph: 3.100,
    totalExtract: 22.2,
    adjustedExtract: 18.1,
    residualExtract: 12.4,
    titratableAcidity: 5.70,
    sugars: 0.5,
    biotics: 4.10,
    totalSO2: 90,
    freeSO2: 8,
    citricAcid: 0.06,
    tartaricAcid: 3.69,
    malicAcid: 0.39,
    succinicAcid: 0.79,
    lacticAcid: 0.40,
    aceticAcid: 0.13,
    glycerin: 1.13,
    glucose: 0.59,
    fructose: 1.92,
    ethanol: 7.91,
    chlorides: 12.70,
    calcium: 16,
    potassium: 81,
    phenolicCompounds: 2482,
    polymericPhenolics: 32,
    bufferCapacity: 1541,
    conductivity: null
  },
  {
    id: "2024-w-13",
    sampleName: "Красень",
    dateReceived: "2025-03-27",
    department: "",
    terroir: "ЮБК",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вино",
    harvestYear: 2024,
    color: "красный",
    alcoholTimofeev: 12.1,
    alcoholDistillation: 11.2,
    ph: 2.900,
    totalExtract: 19.8,
    adjustedExtract: 17.9,
    residualExtract: 11.4,
    titratableAcidity: 6.50,
    sugars: 0.66,
    biotics: 1.90,
    totalSO2: 86,
    freeSO2: 6,
    citricAcid: 0.13,
    tartaricAcid: 4.75,
    malicAcid: 0.18,
    succinicAcid: 0.38,
    lacticAcid: 0.57,
    aceticAcid: 0.43,
    glycerin: 0.56,
    glucose: 0.40,
    fructose: 0.22,
    ethanol: 5.25,
    chlorides: 11.03,
    calcium: 24,
    potassium: 108,
    phenolicCompounds: 2951,
    polymericPhenolics: 37,
    bufferCapacity: 1631,
    conductivity: null
  },
  {
    id: "2024-w-14",
    sampleName: "Ркацители",
    dateReceived: "2025-03-27",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: 12.7,
    alcoholDistillation: 13.5,
    ph: 2.850,
    totalExtract: 21.6,
    adjustedExtract: 16.2,
    residualExtract: 9.5,
    titratableAcidity: 6.70,
    sugars: 0.3,
    biotics: 5.40,
    totalSO2: 40,
    freeSO2: 7,
    citricAcid: 0.14,
    tartaricAcid: 4.20,
    malicAcid: 0.24,
    succinicAcid: 0.56,
    lacticAcid: 0.64,
    aceticAcid: 0.16,
    glycerin: 0.76,
    glucose: 0.67,
    fructose: 4.63,
    ethanol: 6.56,
    chlorides: 13.25,
    calcium: 16,
    potassium: 61,
    phenolicCompounds: 205,
    polymericPhenolics: 33,
    bufferCapacity: 1279,
    conductivity: null
  },
  {
    id: "2024-w-15",
    sampleName: "Алиготе (сахара ВЭЖХ)",
    dateReceived: "2025-03-27",
    department: "Хранение",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: null,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.19,
    tartaricAcid: 3.42,
    malicAcid: 0.28,
    succinicAcid: 0.42,
    lacticAcid: 0.72,
    aceticAcid: 0.30,
    glycerin: 0.55,
    glucose: 0.73,
    fructose: 11.64,
    ethanol: 6.26,
    chlorides: 13.35,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024-w-16",
    sampleName: "Алиготе (сахара ВЭЖХ)",
    dateReceived: "2025-03-27",
    department: "Хранение",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "Крымский западно-при",
    productType: "вино",
    harvestYear: 2024,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: null,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.19,
    tartaricAcid: 3.87,
    malicAcid: 0.35,
    succinicAcid: 0.33,
    lacticAcid: 0.82,
    aceticAcid: 0.28,
    glycerin: 0.63,
    glucose: 2.10,
    fructose: 26.51,
    ethanol: 6.30,
    chlorides: 10.46,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  }
];

// === ДАННЫЕ ИЗ СЕЗОНА 2024 (из документа) ===
const data2024doc = [
  {
    id: "2024doc-1",
    sampleName: "Шардоне",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Первомайское",
    region: "Кировский",
    zone: "Восточный",
    oldZone: "Центрально-степной",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: null,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-2",
    sampleName: "Цитрон Маг",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Приветное",
    region: "Кировский",
    zone: "Восточный",
    oldZone: "Горно-долинный",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: null,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-3",
    sampleName: "Бастардо Маг",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Приветное",
    region: "Кировский",
    zone: "Восточный",
    oldZone: "Горно-долинный",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: null,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-4",
    sampleName: "Санджовезе",
    dateReceived: "2022-09-04",
    department: "Яша Мрия",
    terroir: "Гурзуф",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: null,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-5",
    sampleName: "Мускат белый",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Гурзуф",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 11.2,
    alcoholDistillation: 11.5,
    ph: 3.1,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-6",
    sampleName: "Мускат белый",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Гурзуф",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 10,
    alcoholDistillation: 11.1,
    ph: 3.2,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-7",
    sampleName: "Кокур",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Гурзуф",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 10.4,
    alcoholDistillation: null,
    ph: 2.93,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-8",
    sampleName: "Алиготе",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 11.8,
    alcoholDistillation: 12.3,
    ph: 3.0,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-9",
    sampleName: "Алиготе",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 10.6,
    alcoholDistillation: 10.58,
    ph: 2.9,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-10",
    sampleName: "Кефессия",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Песчаное",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 11.4,
    alcoholDistillation: null,
    ph: 3.3,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-11",
    sampleName: "Басардо Маг",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Песчаное",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 10.5,
    alcoholDistillation: null,
    ph: 3.6,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-12",
    sampleName: "Кокур",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Песчаное",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 9.7,
    alcoholDistillation: null,
    ph: 2.76,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-13",
    sampleName: "Бастардо Маг",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Таврида",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 13.5,
    alcoholDistillation: null,
    ph: 3.62,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-14",
    sampleName: "Мерло",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 14.5,
    alcoholDistillation: null,
    ph: 3.27,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-15",
    sampleName: "Бастардо Маг",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Приветное",
    region: "Кировский",
    zone: "Восточный",
    oldZone: "Горно-долинный",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 12.9,
    alcoholDistillation: null,
    ph: 3.63,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-16",
    sampleName: "Кокур",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Приветное",
    region: "Кировский",
    zone: "Восточный",
    oldZone: "Горно-долинный",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 8.5,
    alcoholDistillation: null,
    ph: 2.8,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-17",
    sampleName: "Каберне",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Ливадия",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 11.4,
    alcoholDistillation: 12.2,
    ph: 3.7,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-18",
    sampleName: "Каберне",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Ливадия",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 12.4,
    alcoholDistillation: 12.4,
    ph: 3.5,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-19",
    sampleName: "Каберне",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Ливадия",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 11,
    alcoholDistillation: 11.3,
    ph: 3.5,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-20",
    sampleName: "Джеват Кара",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.81,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-21",
    sampleName: "Кефессия",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.7,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-22",
    sampleName: "Эким Кара",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.86,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-23",
    sampleName: "Сары Пандас",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.14,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-24",
    sampleName: "Ркацители",
    dateReceived: "2022-09-04",
    department: "ЕЗКВ",
    terroir: "Евпатория",
    region: "Евпатория",
    zone: "Западный",
    oldZone: "приморский",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.02,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-25",
    sampleName: "Мерло",
    dateReceived: "2022-09-04",
    department: "ЕЗКВ",
    terroir: "Евпатория",
    region: "Евпатория",
    zone: "Западный",
    oldZone: "приморский",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.22,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-26",
    sampleName: "Санджовезе",
    dateReceived: "2022-09-04",
    department: "Яша Мрия",
    terroir: "Гурзуф",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: null,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-27",
    sampleName: "Эким Кара",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Ливадия",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.4,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-28",
    sampleName: "Кефессия",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Ливадия",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.2,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-29",
    sampleName: "Джеват Кара",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Ливадия",
    region: "Ялта",
    zone: "Южный берег",
    oldZone: "Крым",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.3,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-30",
    sampleName: "Ркацители",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 11.2,
    alcoholDistillation: 11.98,
    ph: 2.9,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-31",
    sampleName: "Ркацители",
    dateReceived: "2022-09-04",
    department: "Защита",
    terroir: "Угловое",
    region: "Бахчисарай",
    zone: "Крымский западно-при",
    oldZone: "предгорный",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 11.7,
    alcoholDistillation: 12.7,
    ph: 3.0,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2024doc-32",
    sampleName: "Магарача",
    dateReceived: "2022-09-04",
    department: "Агротехника",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.91,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  }
];

// === ДАННЫЕ ИЗ СЕЗОНА 2023 (из документа) ===
const data2023doc = [
  {
    id: "2023doc-1",
    sampleName: "Бастардо",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.487,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-2",
    sampleName: "Мускат",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.717,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-3",
    sampleName: "Басардо",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.686,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-4",
    sampleName: "Маг",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.772,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-5",
    sampleName: "Бастардо",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.687,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-6",
    sampleName: "Бастардо",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.487,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-7",
    sampleName: "Джеват",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.638,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-8",
    sampleName: "Сары",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.95,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-9",
    sampleName: "Джеват",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.911,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-10",
    sampleName: "Первенец",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.862,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-11",
    sampleName: "Мускат",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.803,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "2023doc-12",
    sampleName: "Мускат",
    dateReceived: "2023-09-04",
    department: "Отдел",
    terroir: "Морское",
    region: "Судак",
    zone: "Горно-долинно-приморский",
    oldZone: null,
    productType: "вм",
    harvestYear: 2023,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.794,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: null,
    sugars: null,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  }
];

// === ДАННЫЕ ИЗ XLSX ФАЙЛА (СЕЗОН 2022-2024) ===
const dataFromXlsx = [
  {
    id: "xlsx-1",
    sampleName: "Кефесия 1",
    dateReceived: "2023-09-12",
    department: "Агротехника",
    terroir: "Вилино Инвест плюс",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.586,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.00,
    sugars: 18.60,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-2",
    sampleName: "Кефесия 2",
    dateReceived: "2023-09-12",
    department: "Агротехника",
    terroir: "Вилино Инвест плюс",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.630,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 4.30,
    sugars: 18.60,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-3",
    sampleName: "Бастардо 1",
    dateReceived: "2023-09-12",
    department: "Агротехника",
    terroir: "З.Б. - Балаклава",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.126,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 8.30,
    sugars: 16.20,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-4",
    sampleName: "Бастардо 2",
    dateReceived: "2023-09-12",
    department: "Агротехника",
    terroir: "З.Б. - Балаклава",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.120,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 8.70,
    sugars: 15.60,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-5",
    sampleName: "Бастардо 3",
    dateReceived: "2023-09-12",
    department: "Агротехника",
    terroir: "З.Б. - Балаклава",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 2.991,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 7.90,
    sugars: 17.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-6",
    sampleName: "Алиготе",
    dateReceived: "2023-09-13",
    department: "Инкерман",
    terroir: "Угловое",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.212,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 6.00,
    sugars: 23.40,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-7",
    sampleName: "Бастардо 3",
    dateReceived: "2023-09-14",
    department: "Агротехника",
    terroir: "Приветное",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.502,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 4.80,
    sugars: 22.80,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-8",
    sampleName: "Кефесия 1",
    dateReceived: "2023-09-14",
    department: "Агротехника",
    terroir: "Морское",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.444,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 4.60,
    sugars: 19.10,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-9",
    sampleName: "Кефесия 2",
    dateReceived: "2023-09-14",
    department: "Агротехника",
    terroir: "Морское",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.391,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 4.30,
    sugars: 18.30,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-10",
    sampleName: "Бастардо сх1",
    dateReceived: "2023-09-22",
    department: "Отдел хранения",
    terroir: "Морское",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.596,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.90,
    sugars: 18.80,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-11",
    sampleName: "Бастардо",
    dateReceived: "2023-09-22",
    department: "Защита",
    terroir: "Золотая Балка",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.532,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.80,
    sugars: 21.00,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-12",
    sampleName: "Мерло",
    dateReceived: "2023-09-26",
    department: "Евпатория",
    terroir: "Ромашкино",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.431,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.50,
    sugars: 25.80,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-13",
    sampleName: "Бастардо средняя проба",
    dateReceived: "2023-10-04",
    department: "",
    terroir: "Морское",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.687,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.30,
    sugars: 22.60,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-14",
    sampleName: "Санджовезе контроль",
    dateReceived: "2023-10-05",
    department: "Отдел хранения",
    terroir: "Морское",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.487,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.60,
    sugars: 21.20,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-15",
    sampleName: "Санджовезе опыт",
    dateReceived: "2023-10-05",
    department: "Отдел хранения",
    terroir: "Морское",
    region: "",
    zone: "",
    oldZone: "",
    productType: "вм",
    harvestYear: 2023,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.638,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 6.80,
    sugars: 25.20,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: null,
    tartaricAcid: null,
    malicAcid: null,
    succinicAcid: null,
    lacticAcid: null,
    aceticAcid: null,
    glycerin: null,
    glucose: null,
    fructose: null,
    ethanol: null,
    chlorides: null,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-16",
    sampleName: "Санджовезе",
    dateReceived: "2018-09-25",
    department: "хранение",
    terroir: "Морское",
    region: "Черноморский район",
    zone: "Горно-долинно-приморский",
    oldZone: "",
    productType: "вд",
    harvestYear: 2018,
    color: "красный",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.5,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 6.8,
    sugars: 20.7,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.1,
    tartaricAcid: 4.7,
    malicAcid: 2.5,
    succinicAcid: null,
    lacticAcid: 0.2,
    aceticAcid: 0,
    glycerin: 217.6,
    glucose: 102.8,
    fructose: 114.2,
    ethanol: 0,
    chlorides: 0,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-17",
    sampleName: "Алиготе",
    dateReceived: "2018-10-03",
    department: "",
    terroir: "Инкерман",
    region: "Балаклавского района Севастополя",
    zone: "Севастополь",
    oldZone: "",
    productType: "вд",
    harvestYear: 2018,
    color: "белый",
    alcoholTimofeev: null,
    alcoholDistillation: null,
    ph: 3.58,
    totalExtract: null,
    adjustedExtract: null,
    residualExtract: null,
    titratableAcidity: 5.52,
    sugars: 14.3,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.2,
    tartaricAcid: 5.1,
    malicAcid: 2.9,
    succinicAcid: null,
    lacticAcid: 2.7,
    aceticAcid: 0,
    glycerin: 151.8,
    glucose: 69.2,
    fructose: 82.6,
    ethanol: 0.3,
    chlorides: 0,
    calcium: null,
    potassium: null,
    phenolicCompounds: null,
    polymericPhenolics: null,
    bufferCapacity: null,
    conductivity: null
  },
  {
    id: "xlsx-18",
    sampleName: "Бастардо Маг",
    dateReceived: "2022-09-21",
    department: "Агротехника",
    terroir: "Приветное",
    region: "Кировский район",
    zone: "Горно-долинный",
    oldZone: "",
    productType: "вм",
    harvestYear: 2022,
    color: "красный",
    alcoholTimofeev: 12.9,
    alcoholDistillation: null,
    ph: 3.632,
    totalExtract: 23.6,
    adjustedExtract: 18.8,
    residualExtract: null,
    titratableAcidity: 4.1,
    sugars: 4.8,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 1.34,
    tartaricAcid: 1.91,
    malicAcid: 2.38,
    succinicAcid: 0.61,
    lacticAcid: 3.71,
    aceticAcid: 0.36,
    glycerin: 1.23,
    glucose: 1.81,
    fructose: 2.76,
    ethanol: 4.80,
    chlorides: 11.44,
    calcium: null,
    potassium: 16,
    phenolicCompounds: 61.5,
    polymericPhenolics: 964,
    bufferCapacity: 25,
    conductivity: 28
  },
  {
    id: "xlsx-19",
    sampleName: "Кокур белый",
    dateReceived: "2022-09-22",
    department: "Агротехника",
    terroir: "Приветное",
    region: "Кировский район",
    zone: "Горно-долинный",
    oldZone: "",
    productType: "вм",
    harvestYear: 2022,
    color: "белый",
    alcoholTimofeev: 8.5,
    alcoholDistillation: null,
    ph: 2.805,
    totalExtract: 52.5,
    adjustedExtract: 25.4,
    residualExtract: null,
    titratableAcidity: 6.9,
    sugars: 27.1,
    biotics: null,
    totalSO2: null,
    freeSO2: null,
    citricAcid: 0.61,
    tartaricAcid: 4.82,
    malicAcid: 1.97,
    succinicAcid: 1.06,
    lacticAcid: 0.77,
    aceticAcid: 0.29,
    glycerin: 0.63,
    glucose: 16.87,
    fructose: 40.90,
    ethanol: 4.26,
    chlorides: 7.15,
    calcium: null,
    potassium: 8,
    phenolicCompounds: 78.8,
    polymericPhenolics: 451,
    bufferCapacity: 32,
    conductivity: 41
  }
];

const allWineData = [...data2024, ...data2024doc, ...data2023doc, ...dataFromXlsx];

// === ДАННЫЕ ДЛЯ ХРАНИЛИЩА ОБРАЗЦОВ ===
const wineSamples = [
  {
    id: 1,
    name: "Рислинг 2024",
    vintage: 2024,
    type: "Белое сухое",
    region: "Евпатория",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №1, Полка A-3",
    status: "Готово к дегустации",
    image: "https://placehold.co/300x400/8B4513/FFFFFF?text=Рислинг"
  },
  {
    id: 2,
    name: "Бастардо Магарача 2024",
    vintage: 2024,
    type: "Красное полусладкое",
    region: "Бахчисарай",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №2, Полка B-7",
    status: "Выдерживается",
    image: "https://placehold.co/300x400/8B0000/FFFFFF?text=Бастардо"
  },
  {
    id: 3,
    name: "Алиготе 2024",
    vintage: 2024,
    type: "Белое сухое",
    region: "Угловое",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №1, Полка C-2",
    status: "Готово к дегустации",
    image: "https://placehold.co/300x400/F0E68C/000000?text=Алиготе"
  },
  {
    id: 4,
    name: "Мерло 2024",
    vintage: 2024,
    type: "Красное сухое",
    region: "Угловое",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №2, Полка A-1",
    status: "Выдерживается",
    image: "https://placehold.co/300x400/8B0000/FFFFFF?text=Мерло"
  },
  {
    id: 5,
    name: "Красень 2024",
    vintage: 2024,
    type: "Красное полусладкое",
    region: "ЮБК",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №3, Полка D-5",
    status: "Готово к дегустации",
    image: "https://placehold.co/300x400/DC143C/FFFFFF?text=Красень"
  },
  {
    id: 6,
    name: "Ркацители 2024",
    vintage: 2024,
    type: "Белое сухое",
    region: "Угловое",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №1, Полка B-4",
    status: "Выдерживается",
    image: "https://placehold.co/300x400/F5DEB3/000000?text=Ркацители"
  },
  {
    id: 7,
    name: "Шардоне 2022",
    vintage: 2022,
    type: "Белое сухое",
    region: "Первомайское",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №4, Полка E-2",
    status: "Архивный образец",
    image: "https://placehold.co/300x400/F0E68C/000000?text=Шардоне"
  },
  {
    id: 8,
    name: "Каберне Совиньон 2022",
    vintage: 2022,
    type: "Красное сухое",
    region: "Ливадия",
    producer: "НИИ Винограда и Вина им. Магарача",
    volume: "0.75 л",
    storageLocation: "Погреб №2, Полка F-6",
    status: "Архивный образец",
    image: "https://placehold.co/300x400/8B0000/FFFFFF?text=Каберне"
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Шапка */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">НИИ Винограда и Вина им. Магарача</h1>
                <p className="text-slate-600 text-sm">База данных биохимии вина</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Home className="w-4 h-4 inline mr-2" />
                О нас
              </button>
              <button
                onClick={() => setCurrentPage('database')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 'database' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Database className="w-4 h-4 inline mr-2" />
                База данных
              </button>
              <button
                onClick={() => setCurrentPage('archive')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 'archive' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Archive className="w-4 h-4 inline mr-2" />
                Архив образцов
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Мобильная навигация */}
      <div className="md:hidden bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex-1 py-3 text-xs font-medium transition-colors ${
              currentPage === 'home' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-slate-600'
            }`}
          >
            <Home className="w-4 h-4 mx-auto mb-1" />
            О нас
          </button>
          <button
            onClick={() => setCurrentPage('database')}
            className={`flex-1 py-3 text-xs font-medium transition-colors ${
              currentPage === 'database' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-slate-600'
            }`}
          >
            <Database className="w-4 h-4 mx-auto mb-1" />
            База данных
          </button>
          <button
            onClick={() => setCurrentPage('archive')}
            className={`flex-1 py-3 text-xs font-medium transition-colors ${
              currentPage === 'archive' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-slate-600'
            }`}
          >
            <Archive className="w-4 h-4 mx-auto mb-1" />
            Архив
          </button>
        </div>
      </div>

      {/* Основной контент */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'database' && <DatabasePage />}
        {currentPage === 'archive' && <ArchivePage />}
      </main>

      {/* Подвал */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">НИИ Магарача</span>
              </div>
              <p className="text-slate-400 text-sm">
                Научно-исследовательский институт виноградарства и виноделия имени В.Е. Магарача
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>ул. Винодельная, 1</p>
                <p>г. Симферополь, Республика Крым</p>
                <p>Телефон: +7 (3652) 123-456</p>
                <p>Email: info@magarach.ru</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>© 2025 НИИ Магарача</p>
                <p>Все права защищены</p>
                <p>Разработка: Лаборатория биохимии</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// === Главная страница ===
const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Герой секция */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            База данных биохимии вина
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Централизованная система хранения, обработки и анализа данных 
            о винодельческих образцах Крыма
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex-1">
              <div className="text-3xl font-bold">{allWineData.length}</div>
              <div className="text-blue-100">Образцов в базе</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex-1">
              <div className="text-3xl font-bold">{wineSamples.length}</div>
              <div className="text-blue-100">Образцов в архиве</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex-1">
              <div className="text-3xl font-bold">2018-2024</div>
              <div className="text-blue-100">Период наблюдений</div>
            </div>
          </div>
        </div>
      </div>

      {/* Описание */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            О лаборатории биохимии вина
          </h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Лаборатория биохимии вина НИИ им. Магарача занимается комплексным 
              исследованием химического состава винодельческих материалов и готовой продукции.
            </p>
            <p>
              Мы применяем современные методы анализа для определения содержания 
              спирта, кислот, сахаров, фенольных соединений, минеральных веществ 
              и других биохимических показателей.
            </p>
            <p>
              Полученные данные используются для контроля качества продукции, 
              разработки новых технологий производства и научных исследований 
              в области виноделия.
            </p>
          </div>
        </div>
        <div className="bg-slate-200 rounded-xl h-80 flex items-center justify-center">
          <FlaskConical className="w-24 h-24 text-slate-400" />
        </div>
      </div>

      {/* Назначение сайта */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Назначение данного ресурса
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Хранение данных</h3>
            <p className="text-slate-700">
              Централизованное хранение результатов биохимических анализов 
              винодельческих образцов за период 2018-2024 гг.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <Search className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Поиск и фильтрация</h3>
            <p className="text-slate-700">
              Быстрый поиск образцов по различным параметрам: сорт, год урожая, 
              регион происхождения, цвет, тип продукта и др.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <Award className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Научный анализ</h3>
            <p className="text-slate-700">
              Возможность сравнительного анализа данных для научных исследований 
              и разработки рекомендаций по виноделию.
            </p>
          </div>
        </div>
      </div>

      {/* Особенности */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <Calendar className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Исторические данные</h3>
          <p className="text-slate-700">
            Архив данных за 7 лет наблюдений позволяет отслеживать 
            динамику изменения биохимических показателей вин.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <MapPin className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Географическое покрытие</h3>
          <p className="text-slate-700">
            Данные о винах из различных регионов Крыма: Евпатория, Бахчисарай, 
            Ялта, Судак и другие районы.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <Package className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Полный спектр показателей</h3>
          <p className="text-slate-700">
            Более 40 биохимических параметров для каждого образца: 
            от pH до содержания фенольных соединений.
          </p>
        </div>
      </div>
    </div>
  );
};

// === Страница базы данных ===
const DatabasePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    sort: '',
    harvestYear: '',
    color: '',
    zone: '',
    productType: '',
    terroir: '',
    department: ''
  });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  // Уникальные значения для фильтров
  const uniqueRegions = [...new Set(allWineData.map(item => item.region).filter(Boolean))];
  const uniqueSorts = [...new Set(allWineData.map(item => item.sampleName).filter(Boolean))];
  const uniqueYears = [...new Set(allWineData.map(item => item.harvestYear).filter(Boolean))].sort((a, b) => b - a);
  const uniqueColors = [...new Set(allWineData.map(item => item.color).filter(Boolean))];
  const uniqueZones = [...new Set(allWineData.map(item => item.zone).filter(Boolean))];
  const uniqueProductTypes = [...new Set(allWineData.map(item => item.productType).filter(Boolean))];
  const uniqueTerroirs = [...new Set(allWineData.map(item => item.terroir).filter(Boolean))];
  const uniqueDepartments = [...new Set(allWineData.map(item => item.department).filter(Boolean))];

  // Фильтрация и сортировка
  const filteredData = useMemo(() => {
    let filtered = allWineData.filter(item => {
      const matchesSearch = searchTerm === '' || 
        Object.values(item).some(value => 
          value !== null && value !== undefined && 
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesFilters = 
        (filters.region === '' || item.region === filters.region) &&
        (filters.sort === '' || item.sampleName === filters.sort) &&
        (filters.harvestYear === '' || item.harvestYear.toString() === filters.harvestYear) &&
        (filters.color === '' || item.color === filters.color) &&
        (filters.zone === '' || item.zone === filters.zone) &&
        (filters.productType === '' || item.productType === filters.productType) &&
        (filters.terroir === '' || item.terroir === filters.terroir) &&
        (filters.department === '' || item.department === filters.department);
      
      return matchesSearch && matchesFilters;
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        if (aValue === null || aValue === undefined) aValue = '';
        if (bValue === null || bValue === undefined) bValue = '';
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc' 
            ? aValue.localeCompare(bValue) 
            : bValue.localeCompare(aValue);
        }
        if (sortConfig.direction === 'asc') {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });
    }

    return filtered;
  }, [searchTerm, filters, sortConfig]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleRow = (id) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
    }
    return <ChevronDown className="w-4 h-4 opacity-30" />;
  };

  const formatValue = (value, unit = '') => {
    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'number') {
      return `${value}${unit ? ` ${unit}` : ''}`;
    }
    return value;
  };

  const clearFilters = () => {
    setFilters({
      region: '',
      sort: '',
      harvestYear: '',
      color: '',
      zone: '',
      productType: '',
      terroir: '',
      department: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">База данных виноделия</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Все образцы за 2018-2024 годы · {allWineData.length} записей
        </p>
      </div>

      {/* Панель поиска и фильтров */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Поиск по всем полям..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Сбросить</span>
              </button>
            )}
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Фильтры</span>
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.harvestYear}
                  onChange={(e) => setFilters({...filters, harvestYear: e.target.value})}
                >
                  <option value="">Все года</option>
                  {uniqueYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.sort}
                  onChange={(e) => setFilters({...filters, sort: e.target.value})}
                >
                  <option value="">Все сорта</option>
                  {uniqueSorts.map(sort => (
                    <option key={sort} value={sort}>{sort}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.color}
                  onChange={(e) => setFilters({...filters, color: e.target.value})}
                >
                  <option value="">Все цвета</option>
                  {uniqueColors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.productType}
                  onChange={(e) => setFilters({...filters, productType: e.target.value})}
                >
                  <option value="">Все типы</option>
                  {uniqueProductTypes.map(type => (
                    <option key={type} value={type}>{type === 'вд' ? 'Виноград' : type === 'вм' ? 'Виноматериал' : 'Готовое вино'}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.region}
                  onChange={(e) => setFilters({...filters, region: e.target.value})}
                >
                  <option value="">Все регионы</option>
                  {uniqueRegions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.zone}
                  onChange={(e) => setFilters({...filters, zone: e.target.value})}
                >
                  <option value="">Все зоны</option>
                  {uniqueZones.map(zone => (
                    <option key={zone} value={zone}>{zone}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.terroir}
                  onChange={(e) => setFilters({...filters, terroir: e.target.value})}
                >
                  <option value="">Все терруары</option>
                  {uniqueTerroirs.map(terroir => (
                    <option key={terroir} value={terroir}>{terroir}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.department}
                  onChange={(e) => setFilters({...filters, department: e.target.value})}
                >
                  <option value="">Все отделы</option>
                  {uniqueDepartments.map(dept => (
                    <option key={dept} value={dept}>{dept || 'Не указан'}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
          <Package className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <div className="text-2xl font-bold text-blue-600">{filteredData.length}</div>
            <div className="text-sm text-slate-600">Найдено образцов</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
          <Wine className="w-8 h-8 text-green-600 mr-3" />
          <div>
            <div className="text-2xl font-bold text-green-600">{new Set(filteredData.map(item => item.sampleName)).size}</div>
            <div className="text-sm text-slate-600">Уникальных сортов</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
          <Users className="w-8 h-8 text-purple-600 mr-3" />
          <div>
            <div className="text-2xl font-bold text-purple-600">{new Set(filteredData.map(item => item.region)).size}</div>
            <div className="text-sm text-slate-600">Уникальных регионов</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
          <Wine className="w-8 h-8 text-orange-600 mr-3" />
          <div>
            <div className="text-2xl font-bold text-orange-600">{new Set(filteredData.map(item => item.harvestYear)).size}</div>
            <div className="text-sm text-slate-600">Уникальных лет</div>
          </div>
        </div>
      </div>

      {/* Таблица */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50 sticky top-16 z-40">
              <tr>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100"
                  onClick={() => handleSort('sampleName')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Сорт</span>
                    {getSortIcon('sampleName')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100"
                  onClick={() => handleSort('harvestYear')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Год</span>
                    {getSortIcon('harvestYear')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100"
                  onClick={() => handleSort('color')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Цвет</span>
                    {getSortIcon('color')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100"
                  onClick={() => handleSort('region')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Регион</span>
                    {getSortIcon('region')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100"
                  onClick={() => handleSort('productType')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Тип</span>
                    {getSortIcon('productType')}
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100"
                  onClick={() => handleSort('terroir')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Терруар</span>
                    {getSortIcon('terroir')}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredData.map((item) => (
                <React.Fragment key={item.id}>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900">{item.sampleName}</div>
                      <div className="text-xs text-slate-500">{item.terroir || '-'}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900">{item.harvestYear}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.color === 'белый' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.color}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900">{item.region || '-'}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900">
                      {item.productType === 'вд' ? 'Виноград' : item.productType === 'вм' ? 'Виноматериал' : 'Вино'}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900">{item.terroir || '-'}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-900">
                      <button
                        onClick={() => toggleRow(item.id)}
                        className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{expandedRows.has(item.id) ? 'Скрыть' : 'Детали'}</span>
                      </button>
                    </td>
                  </tr>
                  {expandedRows.has(item.id) && (
                    <tr className="bg-slate-50">
                      <td colSpan="7" className="px-4 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Организационный</h4>
                            <div className="space-y-1">
                              <div><span className="text-slate-600">Зона:</span> {formatValue(item.zone)}</div>
                              <div><span className="text-slate-600">Регион:</span> {formatValue(item.region)}</div>
                              <div><span className="text-slate-600">Терруар:</span> {formatValue(item.terroir)}</div>
                              <div><span className="text-slate-600">Отдел:</span> {formatValue(item.department)}</div>
                              <div><span className="text-slate-600">Дата получения:</span> {formatValue(item.dateReceived)}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Технический</h4>
                            <div className="space-y-1">
                              <div><span className="text-slate-600">Сорт:</span> {formatValue(item.sampleName)}</div>
                              <div><span className="text-slate-600">Год урожая:</span> {formatValue(item.harvestYear)}</div>
                              <div><span className="text-slate-600">Цвет:</span> {formatValue(item.color)}</div>
                              <div><span className="text-slate-600">Тип продукта:</span> {item.productType === 'вд' ? 'Виноград' : item.productType === 'вм' ? 'Виноматериал' : 'Готовое вино'}</div>
                              {item.alcoholTimofeev !== null && (
                                <div><span className="text-slate-600">Спирт (Тимофеев):</span> {formatValue(item.alcoholTimofeev, '% об.')}</div>
                              )}
                              {item.alcoholDistillation !== null && (
                                <div><span className="text-slate-600">Спирт (отгоном):</span> {formatValue(item.alcoholDistillation, '% об.')}</div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Аналитический (основное)</h4>
                            <div className="space-y-1">
                              <div><span className="text-slate-600">pH:</span> {formatValue(item.ph)}</div>
                              <div><span className="text-slate-600">Общий экстракт:</span> {formatValue(item.totalExtract, 'г/дм³')}</div>
                              <div><span className="text-slate-600">Приведенный экстракт:</span> {formatValue(item.adjustedExtract, 'г/дм³')}</div>
                              <div><span className="text-slate-600">Остаточный экстракт:</span> {formatValue(item.residualExtract, 'г/дм³')}</div>
                              <div><span className="text-slate-600">Титруемая кислотность:</span> {formatValue(item.titratableAcidity, 'г/дм³')}</div>
                              <div><span className="text-slate-600">Сахара:</span> {formatValue(item.sugars, 'г/дм³')}</div>
                              <div><span className="text-slate-600">SO₂ общ.:</span> {formatValue(item.totalSO2, 'мг/дм³')}</div>
                              <div><span className="text-slate-600">SO₂ своб.:</span> {formatValue(item.freeSO2, 'мг/дм³')}</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Аналитический (химия)</h4>
                            <div className="space-y-1">
                              <div><span className="text-slate-600">Глицерин:</span> {formatValue(item.glycerin, 'г/л')}</div>
                              <div><span className="text-slate-600">Хлориды:</span> {formatValue(item.chlorides, 'г/л')}</div>
                              <div><span className="text-slate-600">Кальций:</span> {formatValue(item.calcium, 'мг/дм³')}</div>
                              <div><span className="text-slate-600">Калий:</span> {formatValue(item.potassium, 'мг/дм³')}</div>
                              <div><span className="text-slate-600">Фенольные в-ва:</span> {formatValue(item.phenolicCompounds, 'мг/дм³')}</div>
                              <div><span className="text-slate-600">Буферная емкость:</span> {formatValue(item.bufferCapacity, 'ммоль-экв/л')}</div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 mx-auto text-slate-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-900">Нет данных</h3>
            <p className="text-slate-600 mt-1">Попробуйте изменить фильтры или сбросить их</p>
          </div>
        )}
      </div>
    </div>
  );
};

// === Страница архива образцов ===
const ArchivePage = () => {
  const [selectedSample, setSelectedSample] = useState(null);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Архив винодельческих образцов</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Коллекция готовых вин и виноматериалов, хранящихся в лаборатории НИИ Магарача
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wineSamples.map((sample) => (
          <div 
            key={sample.id} 
            className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedSample(sample)}
          >
            <div className="aspect-square bg-slate-100 rounded-t-xl flex items-center justify-center overflow-hidden">
              <img 
                src={sample.image} 
                alt={sample.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 mb-1">{sample.name}</h3>
              <p className="text-sm text-slate-600 mb-2">{sample.type} · {sample.vintage} г.</p>
              <div className="flex items-center justify-between">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  sample.status === 'Готово к дегустации' 
                    ? 'bg-green-100 text-green-800' 
                    : sample.status === 'Выдерживается' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-slate-100 text-slate-800'
                }`}>
                  {sample.status}
                </span>
                <span className="text-xs text-slate-500">{sample.volume}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно с деталями образца */}
      {selectedSample && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-slate-900">{selectedSample.name}</h2>
                <button 
                  onClick={() => setSelectedSample(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={selectedSample.image} 
                    alt={selectedSample.name}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Информация</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Год урожая:</span>
                        <span className="font-medium">{selectedSample.vintage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Тип:</span>
                        <span className="font-medium">{selectedSample.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Регион:</span>
                        <span className="font-medium">{selectedSample.region}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Производитель:</span>
                        <span className="font-medium">{selectedSample.producer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Объем:</span>
                        <span className="font-medium">{selectedSample.volume}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Статус:</span>
                        <span className={`font-medium ${
                          selectedSample.status === 'Готово к дегустации' 
                            ? 'text-green-600' 
                            : selectedSample.status === 'Выдерживается' 
                              ? 'text-yellow-600' 
                              : 'text-slate-600'
                        }`}>
                          {selectedSample.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Хранение</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Место хранения:</span>
                        <span className="font-medium">{selectedSample.storageLocation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-slate-600 text-sm">
                      Этот образец является частью коллекции НИИ Винограда и Вина им. Магарача 
                      и используется для научных исследований и дегустаций.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;