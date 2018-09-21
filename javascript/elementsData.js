// tableData2
// Al die data tabelle
var theElements = [
{nommer: 1,  naam: 'Hydrogen',    symbol: 'H',  kleur: 0, group:0, groupCol:1, configTbl:0, cat:1 },
{nommer: 2,  naam: 'Helium',      symbol: 'He', kleur: 2, group:0, groupCol:2, configTbl:0, cat:3 },
{nommer: 3,  naam: 'Lithium',     symbol: 'Li', kleur: 4, group:1, groupCol:1, configTbl:0, cat:5 },
{nommer: 4,  naam: 'Beryllium',   symbol: 'Be', kleur: 5, group:1, groupCol:2, configTbl:0, cat:6 },
{nommer: 5,  naam: 'Boron',       symbol: 'B',  kleur: 3, group:1, groupCol:3, configTbl:0, cat:4 },
{nommer: 6,  naam: 'Carbon',      symbol: 'C',  kleur: 0, group:1, groupCol:4, configTbl:0, cat:1 },
{nommer: 7,  naam: 'Nitrogen',    symbol: 'N',  kleur: 0, group:1, groupCol:5, configTbl:0, cat:1 },
{nommer: 8,  naam: 'Oxygen',      symbol: 'O',  kleur: 0, group:1, groupCol:6, configTbl:0, cat:1 },
{nommer: 9,  naam: 'Fluorine',    symbol: 'F',  kleur: 1, group:1, groupCol:7, configTbl:0, cat:2 },
{nommer: 10, naam: 'Neon',        symbol: 'Ne', kleur: 2, group:1, groupCol:8, configTbl:0, cat:3 },
{nommer: 11, naam: 'Sodium',      symbol: 'Na', kleur: 4, group:2, groupCol:1, configTbl:0, cat:5 },
{nommer: 12, naam: 'Magnesium',   symbol: 'Mg', kleur: 5, group:2, groupCol:2, configTbl:0, cat:6 },
{nommer: 13, naam: 'Aluminium',   symbol: 'Al', kleur: 9, group:2, groupCol:3, configTbl:0, cat:10 },
{nommer: 14, naam: 'Silicon',     symbol: 'Si', kleur: 3, group:2, groupCol:4, configTbl:0, cat:4 },
{nommer: 15, naam: 'Phosphorus',  symbol: 'P',  kleur: 0, group:2, groupCol:5, configTbl:0, cat:1 },
{nommer: 16, naam: 'Sulfur',      symbol: 'S',  kleur: 0, group:2, groupCol:6, configTbl:0, cat:1 },
{nommer: 17, naam: 'Chlorine',    symbol: 'Cl', kleur: 1, group:2, groupCol:7, configTbl:0, cat:2 },
{nommer: 18, naam: 'Argon',       symbol: 'Ar', kleur: 2, group:2, groupCol:8, configTbl:0, cat:3 },
{nommer: 19, naam: 'Potassium',   symbol: 'K',  kleur: 4, group:3, groupCol:1, configTbl:1, cat:5 },
{nommer: 20, naam: 'Calcium',     symbol: 'Ca', kleur: 5, group:3, groupCol:2, configTbl:1, cat:6 },
{nommer: 21, naam: 'Scandium',    symbol: 'Sc', kleur: 8, group:3, groupCol:3, configTbl:1, cat:9 }, // transition metals
{nommer: 22, naam: 'Titanium',    symbol: 'Ti', kleur: 8, group:3, groupCol:4, configTbl:1, cat:9 },
{nommer: 23, naam: 'Vanadium',    symbol: 'V',  kleur: 8, group:3, groupCol:5, configTbl:1, cat:9 },
{nommer: 24, naam: 'Chromium',    symbol: 'Cr', kleur: 8, group:3, groupCol:6, configTbl:1, cat:9 }, 
{nommer: 25, naam: 'Manganese',   symbol: 'Mn', kleur: 8, group:3, groupCol:7, configTbl:1, cat:9 },
{nommer: 26, naam: 'Iron',        symbol: 'Fe', kleur: 8, group:3, groupCol:8, configTbl:1, cat:9 },
{nommer: 27, naam: 'Cobalt',      symbol: 'Co', kleur: 8, group:3, groupCol:9, configTbl:1, cat:9 },
{nommer: 28, naam: 'Nickel',      symbol: 'Ni', kleur: 8, group:3, groupCol:10, configTbl:1, cat:9 },
{nommer: 29, naam: 'Copper',      symbol: 'Cu', kleur: 8, group:3, groupCol:11, configTbl:1, cat:9 }, 
{nommer: 30, naam: 'Zinc',        symbol: 'Zn', kleur: 8, group:3, groupCol:12, configTbl:1, cat:9 }, // transition metals
{nommer: 31, naam: 'Gallium',     symbol: 'Ga', kleur: 9, group:3, groupCol:13, configTbl:1, cat:10 },
{nommer: 32, naam: 'Germanium',   symbol: 'Ge', kleur: 3, group:3, groupCol:14, configTbl:1, cat:4 },
{nommer: 33, naam: 'Arsenic',     symbol: 'As', kleur: 3, group:3, groupCol:15, configTbl:1, cat:4 },
{nommer: 34, naam: 'Selenium',    symbol: 'Se', kleur: 0, group:3, groupCol:16, configTbl:1, cat:1 },
{nommer: 35, naam: 'Bromine',     symbol: 'Br', kleur: 1, group:3, groupCol:17, configTbl:1, cat:2 },
{nommer: 36, naam: 'Krypton',     symbol: 'Kr', kleur: 2, group:3, groupCol:18, configTbl:1, cat:3 },
{nommer: 37, naam: 'Rubidium',    symbol: 'Rb', kleur: 4, group:4, groupCol:1, configTbl:2, cat:5 },
{nommer: 38, naam: 'Strontium',   symbol: 'Sr', kleur: 5, group:4, groupCol:2, configTbl:2, cat:6 },
{nommer: 39, naam: 'Yttrium',     symbol: 'Y',  kleur: 8, group:4, groupCol:3, configTbl:2, cat:9 },   // transition metals
{nommer: 40, naam: 'Zirconium',   symbol: 'Zr', kleur: 8, group:4, groupCol:4, configTbl:2, cat:9 },
{nommer: 41, naam: 'Niobium',     symbol: 'Nb', kleur: 8, group:4, groupCol:5, configTbl:2, cat:9 },
{nommer: 42, naam: 'Molybdenum',  symbol: 'Mo', kleur: 8, group:4, groupCol:6, configTbl:2, cat:9 },
{nommer: 43, naam: 'Technetium',  symbol: 'Tc', kleur: 8, group:4, groupCol:7, configTbl:2, cat:9 },
{nommer: 44, naam: 'Ruthenium',   symbol: 'Ru', kleur: 8, group:4, groupCol:8, configTbl:2, cat:9 },
{nommer: 45, naam: 'Ruthenium',   symbol: 'Rh', kleur: 8, group:4, groupCol:9, configTbl:2, cat:9 },
{nommer: 46, naam: 'Palladium',   symbol: 'Pd', kleur: 8, group:4, groupCol:10, configTbl:2, cat:9 },
{nommer: 47, naam: 'Silver',      symbol: 'Ag', kleur: 8, group:4, groupCol:11, configTbl:2, cat:9 },
{nommer: 48, naam: 'Cadmium',     symbol: 'Cd', kleur: 8, group:4, groupCol:12, configTbl:2, cat:9},   // transition metals
{nommer: 49, naam: 'Indium',      symbol: 'In', kleur: 9, group:4, groupCol:13, configTbl:2, cat:10 },
{nommer: 50, naam: 'Tin',         symbol: 'Sn', kleur: 9, group:4, groupCol:14, configTbl:2, cat:10 },
{nommer: 51, naam: 'Antimony',    symbol: 'Sb', kleur: 3, group:4, groupCol:15, configTbl:2, cat:4 },
{nommer: 52, naam: 'Tellurium',   symbol: 'Te', kleur: 3, group:4, groupCol:16, configTbl:2, cat:4 },
{nommer: 53, naam: 'Iodine',      symbol: 'I',  kleur: 1, group:4, groupCol:17, configTbl:2, cat:2 },
{nommer: 54, naam: 'Xenon',       symbol: 'Xe', kleur: 2, group:4, groupCol:18, configTbl:2, cat:3 },
{nommer: 55, naam: 'Caesium',     symbol: 'Cs', kleur: 4, group:5, groupCol:1,  configTbl:4, cat:5 },
{nommer: 56, naam: 'Barium',      symbol: 'Ba', kleur: 5, group:5, groupCol:2,  configTbl:4, cat:6 },
{nommer: 57, naam: 'Lanthanum',   symbol: 'La', kleur: 6, group:5, groupCol:3,  configTbl:4, cat:7 },     // lanthanoids
{nommer: 58, naam: 'Cerium',      symbol: 'Ce', kleur: 6, group:5, groupCol:4,  configTbl:4, cat:7 },
{nommer: 59, naam: 'Praseodymium',symbol: 'Pr', kleur: 6, group:5, groupCol:5,  configTbl:4, cat:7 },
{nommer: 60, naam: 'Neodymium',   symbol: 'Nd', kleur: 6, group:5, groupCol:6,  configTbl:4, cat:7 },
{nommer: 61, naam: 'Promethium',  symbol: 'Pm', kleur: 6, group:5, groupCol:7,  configTbl:4, cat:7 },
{nommer: 62, naam: 'Samarium',    symbol: 'Sm', kleur: 6, group:5, groupCol:8,  configTbl:4, cat:7 },
{nommer: 63, naam: 'Europium',    symbol: 'Eu', kleur: 6, group:5, groupCol:9,  configTbl:4, cat:7 },
{nommer: 64, naam: 'Gadolinium',  symbol: 'Gd', kleur: 6, group:5, groupCol:10,  configTbl:4, cat:7 },
{nommer: 65, naam: 'Terbium',     symbol: 'Tb', kleur: 6, group:5, groupCol:11,  configTbl:4, cat:7 },
{nommer: 66, naam: 'Dysprosium',  symbol: 'Dy', kleur: 6, group:5, groupCol:12,  configTbl:4, cat:7 },
{nommer: 67, naam: 'Holmium',     symbol: 'Ho', kleur: 6, group:5, groupCol:13,  configTbl:4, cat:7 },
{nommer: 68, naam: 'Erbium',      symbol: 'Er', kleur: 6, group:5, groupCol:14,  configTbl:4, cat:7 },
{nommer: 69, naam: 'Thulium',     symbol: 'Tm', kleur: 6, group:5, groupCol:15,  configTbl:4, cat:7 },
{nommer: 70, naam: 'Ytterbium',   symbol: 'Yb', kleur: 6, group:5, groupCol:16,  configTbl:4, cat:7 },
{nommer: 71, naam: 'Lutetium',    symbol: 'Lu', kleur: 6, group:5, groupCol:17,  configTbl:4, cat:7 },  // lanthanoids
{nommer: 72, naam: 'Hafnium',     symbol: 'Hf', kleur: 8, group:5, groupCol:18,  configTbl:4, cat:9 }, // transition metals
{nommer: 73, naam: 'Tantalum',    symbol: 'Ta', kleur: 8, group:5, groupCol:19,  configTbl:4, cat:9 },
{nommer: 74, naam: 'Tungsten',    symbol: 'W', kleur: 8,  group:5, groupCol:20,  configTbl:4, cat:9 },
{nommer: 75, naam: 'Rhenium',     symbol: 'Re', kleur: 8, group:5, groupCol:21,  configTbl:4, cat:9 },
{nommer: 76, naam: 'Osmium',      symbol: 'Os', kleur: 8, group:5, groupCol:22,  configTbl:4, cat:9 },
{nommer: 77, naam: 'Iridium',     symbol: 'Ir', kleur: 8, group:5, groupCol:23,  configTbl:4, cat:9 },
{nommer: 78, naam: 'Platinum',    symbol: 'Pt', kleur: 8, group:5, groupCol:24,  configTbl:4, cat:9 },
{nommer: 79, naam: 'Gold',        symbol: 'Au', kleur: 8, group:5, groupCol:25,  configTbl:4, cat:9 },
{nommer: 80, naam: 'Mercury',     symbol: 'Hg', kleur: 8, group:5, groupCol:26,  configTbl:4, cat:9 }, // transition metals
{nommer: 81, naam: 'Thallium',    symbol: 'Tl', kleur: 9, group:5, groupCol:27,  configTbl:4, cat:10 },
{nommer: 82, naam: 'Lead',        symbol: 'Pb', kleur: 9, group:5, groupCol:28,  configTbl:4, cat:10 },
{nommer: 83, naam: 'Bismuth',     symbol: 'Bi', kleur: 9, group:5, groupCol:29,  configTbl:4, cat:10 },
{nommer: 84, naam: 'Polonium',    symbol: 'Po', kleur: 3, group:5, groupCol:30,  configTbl:4, cat:4 },
{nommer: 85, naam: 'Astatine',    symbol: 'At', kleur: 1, group:5, groupCol:31,  configTbl:4, cat:2 },
{nommer: 86, naam: 'Radon',       symbol: 'Rn', kleur: 2, group:5, groupCol:32,  configTbl:4, cat:3 },
{nommer: 87, naam: 'Francium',    symbol: 'Fr', kleur: 4, group:6, groupCol:1,  configTbl:4, cat:5  },
{nommer: 88, naam: 'Radium',      symbol: 'Ra', kleur: 5, group:6, groupCol:2,  configTbl:4, cat:6  },
{nommer: 89, naam: 'Actinium',    symbol: 'Ac', kleur: 7, group:6, groupCol:3,  configTbl:4, cat:8  }, // actinoids
{nommer: 90, naam: 'Thorium',     symbol: 'Th', kleur: 7, group:6, groupCol:4,  configTbl:4, cat:8  },
{nommer: 91, naam: 'Protactinium',symbol: 'Pa', kleur: 7, group:6, groupCol:5,  configTbl:4, cat:8  },
{nommer: 92, naam: 'Uranium',     symbol: 'U', kleur: 7 , group:6, groupCol:6,  configTbl:4, cat:8 },
{nommer: 93, naam: 'Neptunium',   symbol: 'Np', kleur: 7, group:6, groupCol:7,  configTbl:4, cat:8  },
{nommer: 94, naam: 'Plutonium',   symbol: 'Pu', kleur: 7, group:6, groupCol:8,  configTbl:4, cat:8  },
{nommer: 95, naam: 'Americium',   symbol: 'Am', kleur: 7, group:6, groupCol:9,  configTbl:4, cat:8  },
{nommer: 96, naam: 'Curium',      symbol: 'Cm', kleur: 7, group:6, groupCol:10,  configTbl:4, cat:8  },
{nommer: 97, naam: 'Berkelium',   symbol: 'Bk', kleur: 7, group:6, groupCol:11,  configTbl:4, cat:8  },
{nommer: 98, naam: 'Californium', symbol: 'Cf', kleur: 7, group:6, groupCol:12,  configTbl:4, cat:8  },
{nommer: 99, naam: 'Eisteinium', symbol: 'Es', kleur: 7, group:6, groupCol:13,  configTbl:4, cat:8  },
{nommer: 100, naam: 'Fermium',    symbol: 'Fm', kleur: 7, group:6, groupCol:14,  configTbl:4, cat:8  },
{nommer: 101, naam: 'Mendelevium',symbol: 'Md', kleur: 7, group:6, groupCol:15,  configTbl:4, cat:8  },
{nommer: 102, naam: 'Nobelium',   symbol: 'No', kleur: 7, group:6, groupCol:16,  configTbl:4, cat:8  },
{nommer: 103, naam: 'Lawrencium', symbol: 'Lr', kleur: 7, group:6, groupCol:17,  configTbl:4, cat:8  },  // actinoids
{nommer: 104, naam: 'Rutherfordium',symbol: 'Rf', kleur: 8, group:6, groupCol:18,  configTbl:4, cat:9  }, // transition metals
{nommer: 105, naam: 'Dubnium',      symbol: 'Db', kleur: 8, group:6, groupCol:19,  configTbl:4, cat:9  },
{nommer: 106, naam: 'Seaborgium',   symbol: 'Sg', kleur: 8, group:6, groupCol:20,  configTbl:4, cat:9  },
{nommer: 107, naam: 'Bohrium',      symbol: 'Bh', kleur: 8, group:6, groupCol:21,  configTbl:4, cat:9  },
{nommer: 108, naam: 'Hassium',      symbol: 'Hs', kleur: 8, group:6, groupCol:22,  configTbl:4, cat:9  },
{nommer: 109, naam: 'Meitnerium',   symbol: 'Mt', kleur: 8, group:6, groupCol:23,  configTbl:4, cat:9  },
{nommer: 110, naam: 'Darmstadtium', symbol: 'Ds', kleur: 8, group:6, groupCol:24,  configTbl:4, cat:9  },
{nommer: 111, naam: 'Roentgenium',  symbol: 'Rg', kleur: 8, group:6, groupCol:25,  configTbl:4, cat:9  },
{nommer: 112, naam: 'Copernicium',  symbol: 'Cn', kleur: 8, group:6, groupCol:26,  configTbl:4, cat:9  }, // transition metals
{nommer: 113, naam: 'Ununtrium',    symbol: 'Uut', kleur: 9, group:6, groupCol:27,  configTbl:4, cat:10 },
{nommer: 114, naam: 'Flerovium',    symbol: 'Fl', kleur: 9, group:6, groupCol:28,  configTbl:4, cat:10  },
{nommer: 115, naam: 'Ununpentium',  symbol: 'Uup', kleur:9, group:6, groupCol:29,  configTbl:4, cat:10 },
{nommer: 116, naam: 'Livermorium',  symbol: 'Lv', kleur: 9, group:6, groupCol:30,  configTbl:4, cat:10  },
{nommer: 117, naam: 'Ununseptium',  symbol: 'Uus', kleur: 1, group:6, groupCol:31,  configTbl:4, cat:2  },
{nommer: 118, naam: 'Ununoctium',   symbol: 'Uuo', kleur: 2, group:6, groupCol:32,  configTbl:4, cat:3  },
    ];
// --------------------------------------------- Detail ---------------------------------------------------
// {ser:'',st:'',melt:'',boil:'',electn:'',eaff:'',V:'',ion:'',rad:'',hrd:'',mod:'',dens:'',cond:'',heat:'',abd:'',disc:'',weight:''},
var elementProperties = [
{ser:'Nonmetal',st:'Gas',melt:'14.01',boil:'20.28',electn:'2.20',eaff:'72.8',V:'1',ion:'1312.0',                      // 1 Hydrogen
 rad:'53',hrd:'unknown',mod:'unknown',dens:'0.0899',cond:'0.1805',heat:'14300',abd:'75',disc:'1766',weight:'1.008'},
{ser:'Noble',st:'Gas',melt:'0',boil:'4.22',electn:'unknown',eaff:'0',V:'0',ion:'2372.3',                              // 2 Helium
 rad:'31',hrd:'unknown',mod:'unknown',dens:'0.1785',cond:'0.1513',heat:'5193.1',abd:'23',disc:'1895',weight:'4.002602'},
{ser:'Alkali',st:'Solid',melt:'453.69',boil:'1615',electn:'0.98',eaff:'59.6',V:'1',ion:'520.2',                       // 3 Lithium
 rad:'167',hrd:'unknown',mod:'11',dens:'535',cond:'85',heat:'3570',abd:'6.0x10<sup>-7</sup>',disc:'1817',weight:'6.94'},  
{ser:'Alkaline',st:'Solid',melt:'1560',boil:'2743',electn:'1.57',eaff:'0',V:'2',ion:'899.5',                          // 4 Beryllium
 rad:'112',hrd:'600',mod:'130',dens:'1848',cond:'190',heat:'1820',abd:'',disc:'1797',weight:'9.0121831'}, 
{ser:'Metalloid',st:'Solid',melt:'2348',boil:'4273',electn:'2.04',eaff:'26.7',V:'3',ion:'800.6',                      // 5 Boron
 rad:'87',hrd:'unknown',mod:'320',dens:'2460',cond:'27',heat:'1030',abd:'',disc:'1808',weight:'10.81'}, 
{ser:'Nonmetal',st:'Solid',melt:'3823',boil:'4300',electn:'2.55',eaff:'153.9',V:'4',ion:'1086.5',                     // 6 Carbon
 rad:'67',hrd:'unknown',mod:'33',dens:'2260',cond:'140',heat:'710',abd:'.50',disc:'unknown',weight:'12.011'},
{ser:'Nonmetal',st:'Gas',melt:'63.05',boil:'77.36',electn:'3.04',eaff:'7',V:'5',ion:'1402.3',                         // 7 Nitrogen
 rad:'56',hrd:'unknown',mod:'unknown',dens:'1.251',cond:'0.02583',heat:'1040',abd:'0.10',disc:'1772',weight:'14.007'},
{ser:'Nonmetal',st:'Gas',melt:'54.8',boil:'90.2',electn:'3.44',eaff:'141',V:'2',ion:'1313.9',                         // 8 Oxygen
 rad:'48',hrd:'unknown',mod:'unknown',dens:'1.429',cond:'0.02658',heat:'919',abd:'1.00',disc:'1774',weight:'15.999'},
{ser:'Halogen',st:'Gas',melt:'53.5',boil:'85.03',electn:'3.98',eaff:'328',V:'1',ion:'1681.0',                         // 9 Fluorine
 rad:'42',hrd:'unknown',mod:'unknown',dens:'1.696',cond:'0.0277',heat:'824',abd:'0.00004',disc:'1886',weight:'18.998403163'}, 
{ser:'Noble',st:'Gas',melt:'24.56',boil:'27.07',electn:'unknown',eaff:'0',V:'0',ion:'2080.7',                         // 10 Neon
 rad:'38',hrd:'unknown',mod:'unknown',dens:'0.9',cond:'0.0491',heat:'1030.0',abd:'0.13',disc:'1898',weight:'20.1797'}, 
{ser:'Alkali',st:'Solid',melt:'370.87',boil:'1156',electn:'.93',eaff:'52.8',V:'1',ion:'495.8',                        // 11 Sodium
 rad:'190',hrd:'0.69',mod:'6.3',dens:'968',cond:'140',heat:'1230',abd:'0.0020',disc:'1870',weight:'22.98976928'}, 
{ser:'Alkaline',st:'Solid',melt:'923',boil:'1363',electn:'1.31',eaff:'0',V:'2',ion:'737.7',                           // 12 Magnesium
 rad:'145',hrd:'260',mod:'45',dens:'1738',cond:'160',heat:'1020',abd:'0.060',disc:'1755',weight:'24.305'}, 
{ser:'Poor',st:'Solid',melt:'933.47',boil:'2792',electn:'1.61',eaff:'42.5',V:'3',ion:'577.5',                         // 13 Aluminium
 rad:'118',hrd:'245',mod:'76',dens:'2700',cond:'235',heat:'904',abd:'0.0050',disc:'1825',weight:'26.9815385'}, 
{ser:'Metalliod',st:'Solid',melt:'1687',boil:'3173',electn:'1.90',eaff:'133.6',V:'4',ion:'786.5',                     // 14 Silicon
 rad:'111',hrd:'unknown',mod:'100',dens:'2330',cond:'150',heat:'710',abd:'0.070',disc:'1824',weight:'28.085'},
{ser:'Nonmetal',st:'Solid',melt:'317.3',boil:'553.6',electn:'2.19',eaff:'72',V:'5',ion:'1011.8',                      // 15 Phosphorus
 rad:'98',hrd:'unknown',mod:'11',dens:'1823',cond:'0.236',heat:'769.7',abd:'0.00070',disc:'1669',weight:'30.973761998'}, 
{ser:'Nonmetal',st:'Solid',melt:'388.36',boil:'717.87',electn:'2.58',eaff:'200',V:'6',ion:'999.6',                    // 16 Sulfur
 rad:'88',hrd:'unknown',mod:'7.7',dens:'1960',cond:'0.205',heat:'705',abd:'0.050',disc:'-500',weight:'32.06'},  
{ser:'Halogen',st:'Gas',melt:'171.6',boil:'239.11',electn:'3.16',eaff:'349',V:'7',ion:'1251.2',                       // 17 Clorine 
 rad:'79',hrd:'unknown',mod:'1.1',dens:'3.214',cond:'0.0089',heat:'478.2',abd:'0.00010',disc:'1774',weight:'35.45'}, 
{ser:'Noble',st:'Gas',melt:'83.8',boil:'87.3',electn:'unknown',eaff:'0',V:'2',ion:'1520.6',                           // 18 Argon
 rad:'71',hrd:'unknown',mod:'unknown',dens:'1.784',cond:'0.01772',heat:'520.33',abd:'0.020',disc:'1894',weight:'39.948'},  
{ser:'Alkali',st:'Solid',melt:'336.53',boil:'1032',electn:'0.82',eaff:'48.4',V:'1',ion:'418.8',                       // 19 Potassium  
 rad:'243',hrd:'0.363',mod:'3.1',dens:'856',cond:'100',heat:'757',abd:'0.00030',disc:'1807',weight:'39.0983'}, 
{ser:'Alkaline',st:'Solid',melt:'1115',boil:'1757',electn:'1.0',eaff:'2.37',V:'2',ion:'589.8',                        // 20 Calcium
 rad:'194',hrd:'167',mod:'17',dens:'1550',cond:'200',heat:'631',abd:'0.0070',disc:'1808',weight:'40.078'}, 
{ser:'Transition',st:'Solid',melt:'1814',boil:'3103',electn:'1.36',eaff:'18.1',V:'3',ion:'633.1',                     // 21 Scandium
 rad:'184',hrd:'750',mod:'57',dens:'2985',cond:'16',heat:'567',abd:'3.0x10<sup>-6</sup>',disc:'1879',weight:'44.955908'}, 
{ser:'Transition',st:'Solid',melt:'1941',boil:'3560',electn:'1.54',eaff:'7.6',V:'4',ion:'658.8',                      // 22 Titanium
 rad:'176',hrd:'716',mod:'110',dens:'4507',cond:'22',heat:'520',abd:'0.00030',disc:'1791',weight:'47.867'}, 
{ser:'Transition',st:'solid',melt:'2183',boil:'3680',electn:'1.63',eaff:'50.6',V:'5',ion:'650.9',                     // 23 Vanadium
 rad:'171',hrd:'628',mod:'160',dens:'6110',cond:'31',heat:'489',abd:'0.000100',disc:'1801',weight:'50.9415'}, 
{ser:'Transition',st:'Solid',melt:'2180',boil:'2944',electn:'1.66',eaff:'64.3',V:'6',ion:'652.9',                     // 24 Chromium
 rad:'166',hrd:'1120',mod:'160',dens:'7140',cond:'94',heat:'448',abd:'0.0015',disc:'1797',weight:'51.9961'},
{ser:'Transition',st:'Solid',melt:'1519',boil:'2334',electn:'1.55',eaff:'0',V:'7',ion:'717.3',                        // 25 Manganese
 rad:'161',hrd:'196',mod:'120',dens:'7470',cond:'7.8',heat:'479',abd:'0.00080',disc:'1774',weight:'54.938044'},
{ser:'Transition',st:'Solid',melt:'1811',boil:'3134',electn:'1.83',eaff:'15.7',V:'6',ion:'762.5',                     // 26 Iron
 rad:'156',hrd:'490',mod:'170',dens:'7874',cond:'80',heat:'449',abd:'0.11',disc:'-2000',weight:'55.845'},  
{ser:'Transition',st:'Solid',melt:'1768',boil:'3200',electn:'1.88',eaff:'63.7',V:'5',ion:'760.4',                     // 27 Cobalt
 rad:'152',hrd:'700',mod:'180',dens:'8900',cond:'100',heat:'421',abd:'0.00030',disc:'1735',weight:'58.933194'},
{ser:'Transition',st:'Solid',melt:'1728',boil:'3186',electn:'1.91',eaff:'112',V:'4',ion:'737.1',                      // 28 Nickel
 rad:'149',hrd:'700',mod:'180',dens:'8908',cond:'91',heat:'445',abd:'0.0060',disc:'1751',weight:'58.6934'}, 
{ser:'Transition',st:'Solid',melt:'1357.77',boil:'3200',electn:'1.90',eaff:'118.4',V:'4',ion:'745.5',                 // 29 Copper
 rad:'145',hrd:'874',mod:'140',dens:'8920',cond:'400',heat:'384.4',abd:'6.0x10<sup>-6</sup>',disc:'-8000',weight:'63.546'}, 
{ser:'Transition',st:'solid',melt:'692.68',boil:'1180',electn:'1.65',eaff:'0',V:'2',ion:'906.4',                      // 30 Zinc
 rad:'142',hrd:'412',mod:'70',dens:'7140',cond:'120',heat:'388',abd:'0.000030',disc:'1500',weight:'65.38'},
{ser:'Poor',st:'Solid',melt:'302.91',boil:'2477',electn:'1.81',eaff:'28.9',V:'3',ion:'578.8',                         // 31 Gallium
 rad:'136',hrd:'60',mod:'unknown',dens:'5904',cond:'29',heat:'371',abd:'1.0x10<sup>-6</sup>',disc:'1875',weight:'69.723'},
{ser:'Metalloid',st:'Solid',melt:'1211',boil:'3093',electn:'2.01',eaff:'119',V:'4',ion:'762',                         // 32 Germanium
 rad:'125',hrd:'unknown',mod:'unknown',dens:'5323',cond:'60',heat:'321.4',abd:'0.000020',disc:'1886',weight:'72.63'},
{ser:'Metalloid',st:'Solid',melt:'1090',boil:'887',electn:'2.18',eaff:'78',V:'5',ion:'947.0',                          // 33 Arsenic
 rad:'114',hrd:'1140',mod:'22',dens:'5727',cond:'50',heat:'328',abd:'8.0x10<sup>-7</sup>',disc:'1250',weight:'74.921595'}, 
{ser:'Nonmetal',st:'Solid',melt:'494',boil:'958',electn:'2.55',eaff:'195',V:'6',ion:'941.0',                           // 34 Selenium
 rad:'103',hrd:'736',mod:'8.3',dens:'4819',cond:'0.52',heat:'321.2',abd:'3.0x10<sup>-6</sup>',disc:'1817',weight:'78.971'},
{ser:'Halogen',st:'Liquid',melt:'265.8',boil:'332',electn:'2.96',eaff:'324.6',V:'7',ion:'1139.9',                      // 35 Bromide
 rad:'94',hrd:'unknown',mod:'1.9',dens:'3120',cond:'0.12',heat:'947.3',abd:'7.0x10<sup>-7</sup>',disc:'1826',weight:'79.904'},  
{ser:'Noble',st:'Gas',melt:'115.79',boil:'119.93',electn:'3.0',eaff:'0',V:'2',ion:'1350.8',                            // 36 Krypton
 rad:'88',hrd:'unknown',mod:'unknown',dens:'3.75',cond:'0.00943',heat:'248.05',abd:'4.0x10<sup>-6</sup>',disc:'1898',weight:'83.798'},
{ser:'Alkali',st:'Solid',melt:'312.46',boil:'961',electn:'0.82',eaff:'46.9',V:'1',ion:'403.0',                         // 37 Rubidium
 rad:'265',hrd:'.216',mod:'2.5',dens:'1532',cond:'58',heat:'364',abd:'1.0x10<sup>-6</sup>',disc:'1861',weight:'85.4678'},
{ser:'Alkaline',st:'Solid',melt:'1050',boil:'1655',electn:'0.95',eaff:'5.03',V:'2',ion:'549.5',                        // 38 Strontium
 rad:'219',hrd:'unknown',mod:'unknown',dens:'2630',cond:'35',heat:'300',abd:'4.0x10<sup>-6</sup>',disc:'1790',weight:'87.62'}, 
{ser:'Transition',st:'Solid',melt:'1799',boil:'3618',electn:'1.22',eaff:'29.6',V:'3',ion:'600',                        // 39 Yttrium
 rad:'212',hrd:'589',mod:'41',dens:'4472',cond:'17',heat:'298',abd:'7.0x10<sup>-7</sup>',disc:'1794',weight:'88.90584'},  
{ser:'Transition',st:'Solid',melt:'2128',boil:'4682',electn:'1.33',eaff:'41.1',V:'4',ion:'640.1',                      // 40 Zirconium
 rad:'206',hrd:'650',mod:'unknown',dens:'6511',cond:'23',heat:'278',abd:'5.0x10<sup>-6</sup>',disc:'1789',weight:'91.224'}, 
{ser:'Transition',st:'Solid',melt:'2750',boil:'5017',electn:'1.6',eaff:'86.1',V:'5',ion:'652.1',                       // 41 Niobium 
 rad:'198',hrd:'736',mod:'170',dens:'8570',cond:'54',heat:'265',abd:'2.0x10<sup>-7</sup>',disc:'1801',weight:'92.90637'}, 
{ser:'Transition',st:'Solid',melt:'2896',boil:'4912',electn:'2.16',eaff:'71.9',V:'6',ion:'684.3',                      // 42 Molybdenum
 rad:'190',hrd:'1500',mod:'230',dens:'10280',cond:'139',heat:'251',abd:'5.0x10<sup>-7</sup>',disc:'1781',weight:'95.95'},  
{ser:'Transition',st:'Solid',melt:'2430',boil:'4538',electn:'1.9',eaff:'53',V:'7',ion:'702',                           // 43 Technetium
 rad:'183',hrd:'unknown',mod:'unknown',dens:'11500',cond:'51',heat:'63',abd:'0',disc:'1937',weight:'(98)'}, 
{ser:'Transition',st:'Solid',melt:'2607',boil:'4423',electn:'2.2',eaff:'101.3',V:'8',ion:'710.2',                      // 44 Ruthenium
 rad:'178',hrd:'2160',mod:'220',dens:'12370',cond:'120',heat:'238',abd:'4.0x10<sup>-7</sup>',disc:'1844',weight:'101.07'},
{ser:'Transition',st:'Solid',melt:'2237',boil:'3968',electn:'2.28',eaff:'109.7',V:'6',ion:'719.9',                     // 45 Rhodium
 rad:'173',hrd:'1100',mod:'380',dens:'12450',cond:'150',heat:'240',abd:'6.0x10<sup>-8</sup>',disc:'1803',weight:'102.90550'},  
{ser:'Transition',st:'Solid',melt:'1828.05',boil:'3236',electn:'2.20',eaff:'53.7',V:'4',ion:'804.4',                   // 46 Palladium
 rad:'169',hrd:'37.3',mod:'180',dens:'12023',cond:'72',heat:'240',abd:'2.0x10<sup>-7</sup>',disc:'1803',weight:'106.42'},  
{ser:'Transition',st:'Solid',melt:'1234.93',boil:'2435',electn:'1.93',eaff:'125.6',V:'4',ion:'731.0',                  // 47 Silver
 rad:'165',hrd:'24.5',mod:'100',dens:'10490',cond:'430',heat:'235',abd:'6.0x<sup>-8</sup>',disc:'-3000',weight:'107.8682'}, 
{ser:'Transition',st:'Solid',melt:'594.22',boil:'1040',electn:'1.69',eaff:'0',V:'2',ion:'867.8',                       // 48 Cadmium
 rad:'161',hrd:'203',mod:'42',dens:'8650',cond:'97',heat:'230',abd:'2.0x10<sup>-7</sup>',disc:'1817',weight:'112.414'}, 
{ser:'Poor',st:'Solid',melt:'429.75',boil:'2345',electn:'1.78',eaff:'28.9',V:'3',ion:'558.3',                          // 49 Indium
 rad:'156',hrd:'8.83',mod:'unknown',dens:'7310',cond:'82',heat:'233',abd:'3.0x10<sup>-8</sup>',disc:'1863',weight:'114.818'}, 
{ser:'Poor',st:'Solid',melt:'505.08',boil:'2875',electn:'1.96',eaff:'107.3',V:'4',ion:'708.6',                         // 50 Tin
 rad:'145',hrd:'51',mod:'58',dens:'7310',cond:'67',heat:'217',abd:'4.0x10<sup>-7</sup>',disc:'-3000',weight:'118.710'}, 
{ser:'Metalloid',st:'Solid',melt:'903.78',boil:'1860',electn:'2.05',eaff:'103.2',V:'5',ion:'834',                      // 51 Antimony
 rad:'133',hrd:'294',mod:'42',dens:'6697',cond:'24',heat:'207',abd:'4.0x10<sup>-8</sup>',disc:'-3000',weight:'121.760'}, 
{ser:'Metalloid',st:'Solid',melt:'722.66',boil:'1261',electn:'2.1',eaff:'190.2',V:'6',ion:'869.3',                     // 52 Tellurium
 rad:'123',hrd:'180',mod:'65',dens:'6240',cond:'3',heat:'201',abd:'9.0x10<sup>-7</sup>',disc:'1783',weight:'127.60'}, 
{ser:'Halogen',st:'Solid',melt:'386.85',boil:'457.4',electn:'2.66',eaff:'295.2',V:'7',ion:'1008.4',                    // 53 Iodine
 rad:'115',hrd:'unknown',mod:'7.7',dens:'4940',cond:'0.449',heat:'429.0',abd:'1.00x10<sup>-7</sup>',disc:'1811',weight:'126.90447'}, 
{ser:'Noble',st:'Gas',melt:'161.3',boil:'165.1',electn:'2.6',eaff:'0',V:'8',ion:'1170.4',                              // 54 Xenon
 rad:'108',hrd:'unknown',mod:'unknown',dens:'5.9',cond:'0.00565',heat:'158.32',abd:'1.00x10<sup>-6</sup>',disc:'1898',weight:'131.293'},
{ser:'Alkali',st:'Solid',melt:'301.59',boil:'944',electn:'0.78',eaff:'45.5',V:'1',ion:'375.7',                         // 55 Caesium 
 rad:'298',hrd:'0.14',mod:'1.6',dens:'1879',cond:'36',heat:'242',abd:'8.0x10<sup>-8</sup>',disc:'1860',weight:'132.90545196'}, 
{ser:'Alkaline',st:'Solid',melt:'1000',boil:'2143',electn:'0.89',eaff:'13.95',V:'2',ion:'502.9',                       // 56 Barium
 rad:'253',hrd:'unknown',mod:'9.6',dens:'3510',cond:'18',heat:'205',abd:'1.0x10<sup>-6</sup>',disc:'1808',weight:'137.327'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1193',boil:'3737',electn:'1.10',eaff:'48',V:'3',ion:'538.1',                        // 57 Lanthanum
 rad:'unknown',hrd:'363',mod:'28',dens:'6146',cond:'13',heat:'195',abd:'2.0x10<sup>-7</sup>',disc:'1839',weight:'138.90547'},  
{ser:'Lanthanoid',st:'Solid',melt:'1071',boil:'3633',electn:'1.12',eaff:'50',V:'4',ion:'534.4',                        // 58 Cerium
 rad:'unknown',hrd:'412',mod:'22',dens:'6689',cond:'11',heat:'192',abd:'1.0x10<sup>-6</sup>',disc:'1803',weight:'140.116'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1204',boil:'3563',electn:'1.13',eaff:'50',V:'4',ion:'527',                          // 59 Praseodymium
 rad:'247',hrd:'481',mod:'29',dens:'6640',cond:'13',heat:'193',abd:'2.0x10<sup>-7</sup>',disc:'1885',weight:'140.90766'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1294',boil:'3373',electn:'1.14',eaff:'50',V:'3',ion:'533.1',                        // 60 Neodymium
 rad:'206',hrd:'265',mod:'32',dens:'7010',cond:'17',heat:'190',abd:'1.0x10<sup>-6</sup>',disc:'1885',weight:'144.242'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1373',boil:'3273',electn:'unknown',eaff:'50',V:'3',ion:'540',                       // 61 Promethium
 rad:'205',hrd:'unknown',mod:'33',dens:'7264',cond:'15',heat:'unknown',abd:'0',disc:'1945',weight:'(145)'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1345',boil:'2076',electn:'1.17',eaff:'50',V:'3',ion:'544.5',                        // 62 Samarium
 rad:'238',hrd:'441',mod:'38',dens:'7353',cond:'13',heat:'196',abd:'5.0x10<sup>-7</sup>',disc:'1879',weight:'150.36'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1095',boil:'1800',electn:'unknown',eaff:'50',V:'3',ion:'547.1',                     // 63 Europium
 rad:'231',hrd:'unknown',mod:'8.3',dens:'5244',cond:'14',heat:'182',abd:'5.0x10<sup>-8</sup>',disc:'1901',weight:'151.964'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1586',boil:'3523',electn:'1.20',eaff:'50',V:'3',ion:'593.4',                        // 64 Gadolinium
 rad:'233',hrd:'unknown',mod:'38',dens:'7901',cond:'11',heat:'240',abd:'2.0x10<sup>-7</sup>',disc:'1880',weight:'157.25'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1629',boil:'3503',electn:'unknown',eaff:'50',V:'4',ion:'565.8',                     // 65 Terbium
 rad:'225',hrd:'677',mod:'38.7',dens:'8219',cond:'11',heat:'182',abd:'5.0x10<sup>-8</sup>',disc:'1843',weight:'158.92535'},
{ser:'Lanthanoid',st:'Solid',melt:'1685',boil:'2840',electn:'1.22',eaff:'50',V:'3',ion:'573.0',                        // 66 Dysprosium
 rad:'228',hrd:'500',mod:'41',dens:'8551',cond:'11',heat:'167',abd:'2.0x10<sup>-7</sup>',disc:'1886',weight:'162.500'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1747',boil:'2873',electn:'1.23',eaff:'50',V:'3',ion:'581.0',                        // 67 Holmium
 rad:'226',hrd:'746',mod:'40',dens:'8795',cond:'16',heat:'165',abd:'5.0x10<sup>-8</sup>',disc:'1878',weight:'164.93033'}, 
{ser:'Lanthanoid',st:'Solid',melt:'1770',boil:'3141',electn:'1.24',eaff:'50',V:'3',ion:'589.3',                        // 68 Erbium
 rad:'226',hrd:'814',mod:'44',dens:'9066',cond:'15',heat:'168',abd:'2.0x10<sup>-7</sup>',disc:'1842',weight:'167.259'},
{ser:'Lanthanoid',st:'Solid',melt:'1818',boil:'2223',electn:'1.25',eaff:'50',V:'3',ion:'596.7',                        // 69 Thulium
 rad:'222',hrd:'471',mod:'45',dens:'9321',cond:'17',heat:'160',abd:'1.0x10<sup>-8</sup>',disc:'1879',weight:'168.93422'},  
{ser:'Lanthanoid',st:'Solid',melt:'1092',boil:'1469',electn:'unknown',eaff:'50',V:'3',ion:'603.4',                     // 70 Ytterbium
 rad:'222',hrd:'343',mod:'31',dens:'6570',cond:'39',heat:'154',abd:'2.0x10<sup>-7</sup>',disc:'1878',weight:'173.054'},
{ser:'Lanthanoid',st:'Solid',melt:'1936',boil:'3675',electn:'1.27',eaff:'50',V:'3',ion:'523.5',                        // 71 Lutetium
 rad:'217',hrd:'893',mod:'48',dens:'9841',cond:'16',heat:'154',abd:'1.0x10<sup>-8</sup>',disc:'1907',weight:'174.9668'}, 
{ser:'Transition',st:'Solid',melt:'2506',boil:'4876',electn:'1.3',eaff:'0',V:'4',ion:'658.5',                          // 72 Hafnium
 rad:'208',hrd:'1700',mod:'110',dens:'13310',cond:'23',heat:'144',abd:'7.0x10<sup>-8</sup>',disc:'1923',weight:'178.49'}, 
{ser:'Transition',st:'Solid',melt:'3290',boil:'5731',electn:'1.5',eaff:'31',V:'5',ion:'761',                           // 73 Tantalum
 rad:'200',hrd:'800',mod:'200',dens:'16650',cond:'57',heat:'140',abd:'8.0x10<sup>-9</sup>',disc:'1802',weight:'180.94788'}, 
{ser:'Transition',st:'Solid',melt:'3695',boil:'5828',electn:'2.36',eaff:'78.6',V:'6',ion:'770',                        // 74 Tungsten
 rad:'193',hrd:'2570',mod:'310',dens:'19250',cond:'170',heat:'132',abd:'5.0x10<sup>-8</sup>',disc:'1783',weight:'183.84'},  
{ser:'Transition',st:'Solid',melt:'3459',boil:'5869',electn:'1.9',eaff:'14.5',V:'7',ion:'760',                         // 75 Rhenium
 rad:'188',hrd:'1320',mod:'370',dens:'21020',cond:'48',heat:'137',abd:'2.0x10<sup>-8</sup>',disc:'1925',weight:'186.207'}, 
{ser:'Transition',st:'Solid',melt:'3306',boil:'5285',electn:'2.2',eaff:'106.1',V:'8',ion:'840',                        // 76 Osmium
 rad:'185',hrd:'3920',mod:'unknown',dens:'22610',cond:'88',heat:'130',abd:'3.0x10<sup>-7</sup>',disc:'1803',weight:'190.23'},  
{ser:'Transition',st:'Solid',melt:'2739',boil:'4701',electn:'2.20',eaff:'151',V:'8',ion:'880',                         // 77 Iridium
 rad:'180',hrd:'1670',mod:'320',dens:'22650',cond:'150',heat:'131',abd:'2.0x10<sup>-7</sup>',disc:'1803',weight:'192.217'}, 
{ser:'Transition',st:'Solid',melt:'2041.4',boil:'',electn:'4098',eaff:'205.3',V:'6',ion:'870',                         // 78 Platinum
 rad:'177',hrd:'392',mod:'230',dens:'21090',cond:'72',heat:'133',abd:'5.0x10<sup>-7</sup>',disc:'1735',weight:'195.084'},
{ser:'Transition',st:'Solid',melt:'1337.33',boil:'3129',electn:'2.54',eaff:'222.8',V:'5',ion:'890.1',                  // 79 Gold
 rad:'174',hrd:'25',mod:'220',dens:'19300',cond:'320',heat:'129.1',abd:'6.0x10<sup>-8</sup>',disc:'-2500',weight:'196.966569'},
{ser:'Transition',st:'Liquid',melt:'234.32',boil:'629.88',electn:'2.0',eaff:'0',V:'4',ion:'1007.1',                    //  80 Mercury
 rad:'171',hrd:'unknown',mod:'25',dens:'13534',cond:'8.3',heat:'139.5',abd:'1.00x10<sup>-7</sup>',disc:'-1500',weight:'200.59'}, 
{ser:'Poor',st:'Solid',melt:'577',boil:'1746',electn:'1.62',eaff:'19.2',V:'3',ion:'589.4',                             // 81 Thallium
 rad:'156',hrd:'26.4',mod:'43',dens:'11850',cond:'46',heat:'129',abd:'5.0x10<sup>-8</sup>',disc:'1861',weight:'204.38'},
{ser:'Poor',st:'Solid',melt:'600.61',boil:'2022',electn:'2.33',eaff:'35.1',V:'4',ion:'715.6',                          // 82 Lead
 rad:'154',hrd:'38.3',mod:'46',dens:'11340',cond:'35',heat:'127',abd:'1.0x10<sup>-6</sup>',disc:'-4000',weight:'207.2'}, 
{ser:'Poor',st:'Solid',melt:'544.4',boil:'1837',electn:'2.02',eaff:'91.2',V:'5',ion:'703',                             // 83 Bismuth
 rad:'143',hrd:'94.2',mod:'31',dens:'9780',cond:'8',heat:'122',abd:'7.0x1<sup>-8</sup>',disc:'1400',weight:'208.98040'},   
{ser:'Metalloid',st:'Solid',melt:'527',boil:'1235',electn:'2.0',eaff:'183.3',V:'6',ion:'812.1',                        // 84 Polonium
 rad:'135',hrd:'unknown',mod:'unknown',dens:'9196',cond:'unknown',heat:'unknown',abd:'0',disc:'1898',weight:'(209)'}, 
{ser:'Halogen',st:'Solid',melt:'575',boil:'610',electn:'2.2',eaff:'270.1',V:'7',ion:'890',                             // 85 Astatine 
 rad:'127',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'2',heat:'unknown',abd:'0',disc:'1940',weight:'(210)'},
{ser:'Noble',st:'Gas',melt:'202',boil:'211.3',electn:'unknown',eaff:'0',V:'6',ion:'1037',                              // 86 Radon
 rad:'120',hrd:'unknown',mod:'unknown',dens:'9.73',cond:'0.00361',heat:'93.65',abd:'0',disc:'1900',weight:'(222)'}, 
{ser:'Alkali',st:'Solid',melt:'300',boil:'950',electn:'0.7',eaff:'unknown',V:'1',ion:'380',                            // 87 Francium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1939',weight:'(223)'},  
{ser:'Alkaline',st:'Solid',melt:'973',boil:'2010',electn:'0.9',eaff:'unknown',V:'2',ion:'509.3',                       // 88 Radium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'5000',cond:'19',heat:'92.0',abd:'0',disc:'1898',weight:'(226)'},
{ser:'Actinoid',st:'Solid',melt:'1323',boil:'3473',electn:'1.1',eaff:'unknown',V:'3',ion:'499',                        // 89 Actinium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'10070',cond:'12',heat:'120',abd:'0',disc:'1899',weight:'(227)'},  
{ser:'Actinoid',st:'Solid',melt:'2023',boil:'5093',electn:'1.3',eaff:'unknown',V:'4',ion:'587',                         // 90 Thorium
 rad:'unknown',hrd:'400',mod:'54',dens:'11724',cond:'54',heat:'118',abd:'4.0x10<sup>-8</sup>',disc:'1829',weight:'232.0377'},  
{ser:'Actinoid',st:'Solid',melt:'1845',boil:'4273',electn:'1.5',eaff:'unknown',V:'5',ion:'568',                        // 91 Protactinium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'15370',cond:'47',heat:'99.1',abd:'0',disc:'1913',weight:'231.03588'}, 
{ser:'Actinois',st:'Solid',melt:'1408',boil:'4200',electn:'1.38',eaff:'unknown',V:'6',ion:'597.6',                     // 92 Uranium
 rad:'unknown',hrd:'2400',mod:'100',dens:'19050',cond:'27',heat:'116',abd:'2.0x10<sup>-8</sup>',disc:'1789',weight:'238.02891'},
{ser:'Actinoid',st:'Solid',melt:'917',boil:'4273',electn:'1.36',eaff:'unknown',V:'7',ion:'604.5',                      // 93 Neptunium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'20450',cond:'6',heat:'unknown',abd:'0',disc:'1940',weight:'(237)'},  
{ser:'Actinoid',st:'Solid',melt:'913',boil:'3503',electn:'1.28',eaff:'unknown',V:'8',ion:'584.7',                      // 94 Plutonium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'19816',cond:'6',heat:'unknown',abd:'0',disc:'1940',weight:'(244)'},      
{ser:'Actinoid',st:'Solid',melt:'1449',boil:'2284',electn:'1.3',eaff:'unknown',V:'6',ion:'578',                        // 95 Americium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'10',heat:'unknown',abd:'0',disc:'1940',weight:'(243)'},
{ser:'Actinoid',st:'Solid',melt:'1618',boil:'3383',electn:'1.3',eaff:'unknown',V:'4',ion:'581',                        // 96 Curium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'13510',cond:'unknown',heat:'unknown',abd:'0',disc:'1944',weight:'(247)'}, 
{ser:'Actinoid',st:'Solid',melt:'1323',boil:'unknown',electn:'1.3',eaff:'unknown',V:'4',ion:'601',                     // 97 Berkelium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'14780',cond:'10',heat:'unknown',abd:'0',disc:'1949',weight:'(247)'}, 
{ser:'Actinoid',st:'Solid',melt:'1173',boil:'unknown',electn:'1.3',eaff:'unknown',V:'4',ion:'608',                     // 98 Califomium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'15100',cond:'unknown',heat:'unknown',abd:'0',disc:'1950',weight:'(251)'},
{ser:'Actinoid',st:'Solid',melt:'1133',boil:'unknown',electn:'1.3',eaff:'unknown',V:'3',ion:'619',                     // 99 Einsteinium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1952',weight:'(252)'}, 
{ser:'Actinoid',st:'Solid',melt:'1800',boil:'unknown',electn:'1.3',eaff:'unknown',V:'3',ion:'627',                     // 100 Fermium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1952',weight:'(257)'}, 
{ser:'Actinoid',st:'Solid',melt:'1100',boil:'unknown',electn:'1.3',eaff:'unknown',V:'3',ion:'635',                    // 101 Mendelevium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1955',weight:'(258)'}, 
{ser:'Actinoid',st:'Solid',melt:'1100',boil:'unknown',electn:'1.3',eaff:'unknown',V:'3',ion:'642',                    // 102 Nobelium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1958',weight:'(259)'},  
{ser:'Actinoid',st:'Solid',melt:'1900',boil:'unknown',electn:'unknown',eaff:'unknown',V:'3',ion:'470',              // 103 Lawrencium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1961',weight:'(262)'},  
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'4',ion:'580',       // 104 Rutherfordium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1964',weight:'(267)'},
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'5',ion:'unknown',   // 105 Dubnium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1967',weight:'(268)'}, 
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'6',ion:'unknown',   // 106 Seaborgium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1974',weight:'(271)'}, 
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'7',ion:'unknown',   // 107 Bohrium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1981',weight:'(272)'},
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'8',ion:'unknown',    // 108 Hassium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1984',weight:'(270)'},  
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 109 Meitnerium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1982',weight:'(276)'},
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 110 Darmstadtium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1994',weight:'(281)'},   
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 111 Roentgenium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1994',weight:'(280)'},
{ser:'Transition',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 112 Copernicium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1996',weight:'(285)'}, 
{ser:'Poor',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 113 Ununtrium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'2004',weight:'(284)'}, 
{ser:'Poor',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'6',ion:'unknown',       // 114 Flerovium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'1998',weight:'(289)'},
{ser:'Poor',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 115 Ununpentium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'2004',weight:'(288)'}, 
{ser:'Poor',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 116 Livermorium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'2000',weight:'(293)'},
{ser:'Halogen',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown', // 117 Ununseptium
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'2010',weight:'(294)'}, 
{ser:'Noble',st:'unknown',melt:'unknown',boil:'unknown',electn:'unknown',eaff:'unknown',V:'unknown',ion:'unknown',  // Ununoctium 
 rad:'unknown',hrd:'unknown',mod:'unknown',dens:'unknown',cond:'unknown',heat:'unknown',abd:'0',disc:'2006',weight:'(294)'},   
]	
// --------------------------------------------------- foto array -------------------------------------------------------------
 
var atomFotos =['fotos/foto01H.png','fotos/foto02He.png','fotos/foto03Li.png','fotos/foto04Be.png','fotos/foto05B.png',
						 'fotos/foto06C.png','fotos/foto07N.png','fotos/foto08O.png','fotos/foto09F.png','fotos/foto10Ne.png',
						 'fotos/foto11Na.png','fotos/foto12Mg.png','fotos/foto13Al.png','fotos/foto14Si.png','fotos/foto15P.png',
						 'fotos/foto16S.png','fotos/foto17Cl.png','fotos/foto18Ar.png','fotos/foto19K.png','fotos/foto20Ca.png',
						 'fotos/foto21Sc.png','fotos/foto22Ti.png','fotos/foto23V.png','fotos/foto24Cr.png','fotos/foto25Mn.png',
						 'fotos/foto26Fe.png','fotos/foto27Co.png','fotos/foto28Ni.png','fotos/foto29Cu.png','fotos/foto30Zn.png',
						 'fotos/foto31Ga.png','fotos/foto32Ge.png','fotos/foto33As.png','fotos/foto34Se.png','fotos/foto35Br.png',
						 'fotos/foto36Kr.png','fotos/foto37Br.png','fotos/foto38Sr.png','fotos/foto39Y.png','fotos/foto40Zr.png',
						 'fotos/foto41Nb.png','fotos/foto42Mo.png','fotos/foto43Tc.png','fotos/foto44Ru.png','fotos/foto45Rh.png',
						 'fotos/foto46Pd.png','fotos/foto47Ag.png','fotos/foto48Cd.png','fotos/foto49In.png','fotos/foto50Sn.png',
						 'fotos/foto51Sb.png','fotos/foto52Te.png','fotos/foto53I.png','fotos/foto54Xe.png','fotos/foto55Cs.png',
						 'fotos/foto56Ba.png','fotos/foto57La.png','fotos/foto58Ce.png','fotos/foto59Pr.png','fotos/foto60Nd.png',
						 'fotos/foto61Pm.png','fotos/foto62Sm.png','fotos/foto63Eu.png','fotos/foto64Gd.png','fotos/foto65Tb.png',
						 'fotos/foto66Dy.png','fotos/foto67Ho.png','fotos/foto68Er.png','fotos/foto69Tm.png','fotos/foto70Yb.png',
						 'fotos/foto71Lu.png','fotos/foto72Hf.png','fotos/foto73Ta.png','fotos/foto74W.png','fotos/foto75Re.png',
						 'fotos/foto76Os.png','fotos/foto77Ir.png','fotos/foto78Pt.png','fotos/foto79Au.png','fotos/foto80Hg.png',
						 'fotos/foto81Tl.png','fotos/foto82Pb.png','fotos/foto83Bi.png','fotos/foto84Po.png','fotos/foto85At.png',
						 'fotos/foto86Rn.png','fotos/foto87Fr.png','fotos/foto88Ra.png','fotos/foto89Ac.png','fotos/foto90Th.png',
						 'fotos/foto91Pa.png','fotos/foto92U.png','fotos/foto93Np.png','fotos/foto94Pu.png','fotos/foto95Am.png',
						 'fotos/foto96Cm.png','fotos/foto97Bk.png','fotos/foto98Cf.png','fotos/foto99Es.png','fotos/fotoz100Fm.png',
						 'fotos/fotoz101Md.png','fotos/fotoz102No.png','fotos/fotoz103Lr.png','fotos/fotoz104Rf.png','fotos/fotoz999.png'
					 ];
// ----------------------------------------------------------------------------------------------------------------------------		

var catagories = [
{color:'rgb(168,240,168)',type:'Other non metals'},       // 1,6,7,8,15,16,34,                     = 0
{color:'rgb(240,240,150)',type:'Halogens'},               // 9,17,35,53,85,117,                    = 1
{color:'rgb(200,250,250)',type:'Noble gases'},            // 2,10,18,36,54,86,118,                 = 2 
{color:'rgb(210,210,160)',type:'Metaloids'},              // 5,14,32,33,51,52,84,                  = 3
{color:'rgb(245,150,150)',type:'Alkaline metals'},        // 3,11,19,37,55,87,                     = 4
{color:'rgb(245,220,170)',type:'Alkaline earth metals'}, // 4,12,20,38,56,88,                      = 5
{color:'rgb(245,190,245)',type:'Lanthanoids'},            // 57-71,                                = 6
{color:'rgb(245,160,200)',type:'Actinoids'},              // 89-103,                               = 7
{color:'rgb(240,190,190)',type:'Transition metals'},      // 21-30, 39-48, 72-80, 104-112,         = 8
{color:'rgb(195,195,245)',type:'Post transition metals'}, // 13,31,49,50,81,82,83,113,114,115,116, = 9
];
// ----------------------- symbols -----------------------------------------------------------------------
 var atomSymbol = ['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar',
									 'K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br',
									 'Kr','Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb',
									 'Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er',
									 'Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At',
									 'Rn','Fr','Ra','Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md',
									 'No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Uut','Fl','Uup','Lv','Uus','Uuo'];	
	
// -------------------- volgorde array ------------------------------	
		
	  var baanName =  ['s','p','p','p','d','d','d','d','d','f','f','f','f','f','f','f'];
											 								 
// -----------------------------------------------------------------------------------------------------------	 										
var atomicWeight = [
1.008,4.002,6.941,9.012,10.811,12.010,14.006,15.999,18.998,20.101,22.989,24.305,26.981,28.085,30.973,32.065,35.453,39.948,
39.098,40.078,44.956,47.867,50.941,51.996,54.938,55.845,58.933,58.693,63.546,65.380,69.723,72.640,74.921,78.960,79.904,83.798,85.467,87.620,88.905,91.224,92.906,95.960,98.000,101.070,102.905,106.420,107.868,112.411,114.818,118.710,121.760,127.600,
126.904,131.293,132.905,137.327,140.116,140.907,144.242,145.000,150.360,151.964,157.250,158.925,162.500,164.930,167.259,
168.9342,173.054,174.966,178.490,180.947,183.840,186.207,190.230,192.217,195.084,196.966,200.590,204.380,207.200,208.980,
209.000,210.000,222.000,223.000,223.000,227.000,232.038,231.036,238.029,237.000,244.000,243.000,247.000,247.000,251.000,
252.000,257.000,258.000,259.000,262.000,267.000,268.000,269.000,	
270.000,269.000,278.000,281.000,281.000,285.000,286.000,289.000,288.000,293.000,294.000,294.000,294.000,
];

var atomicRadii = [
38,32,134,90,82,77,75,73,71,69,154,130,118,111,106,102,99,97,196,174,144,136,125,127,139,125,126,121,138,131,126,122,119,116,114,	
110,211,192,162,148,137,145,156,126,135,131,153,148,144,141,138,135,133,130,225,198,169,0,0,0,0,0,0,0,0,0,0,0,0,0,160,150,138,
146,159,128,137,128,144,149,148,147,146,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
];

 
var density = [
0.0708,0.147,0.534,1.848,2.34,2.25,0.808,1.149,1.108,1.204,0.971,1.738,2.6989,2.33,1.82,2.07,1.56,1.4,0.856,1.55,2.99,4.54,6.11,	
7.18,7.21,7.874,8.9,8.902,8.96,7.133,5.91,5.323,5.73,4.79,3.12,2.155,1.532,2.54,4.47,6.506,8.57,10.22,11.5,12.41,12.41,12.02,	
10.5,8.65,7.31,7.31,6.691,6.24,4.93,3.52,1.873,3.5,6.15,6.757,6.773,7.007,7.2,7.52,5.243,7.9,8.229,8.55,	
8.795,9.06,9.321,6.9654,9.8404,13.31,16.654,19.3,21.02,22.57,22.42,21.45,19.3,13.546,11.85,11.35,9.747,9.32,	 
'-',4.4,'-',5.5,'-',11.78,15.37,19.05,20.25,19.84,13.67,13.51,13.25,15.1,
'-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'];


var ionizationEnergy = [
1312,	2372.3,	520.2,	899.5,	800.6,	1086.5,	1402.3,	1313.9,	1681,	2080.7,	
495.8,	737.7,	577.5,	786.5,	1011.8,	999.6,	1251.2,	1520.6,	418.8,	
589.8,	633.1,	658.8,	650.9,	652.9,	717.3,	762.5,	760.4,	737.1,	745.5,	
906.4,	578.8,	762,	947,	941,	1139.9,	1350.8,	403,	549.5,	600,	
640.1,	652.1,	684.3,	702,	710.2,	719.7,	804.4,	731,	867.8,	558.3,	
708.6,	834,	869.3,	1008.4,	1170.4,	375.7,	502.9,	538.1,	534.4,	527,	
533.1,	540,	544.5,	547.1,	593.4,	565.8,	573,	581,	589.3,	596.7,	
603.4,	523.5,	658.5,	761,	770,	760,	840,	880,	870,	890.1,	1007.1,	
589.4,	715.6,	703,	812.1,	890,	1037,	380,	509.3,	499,	587,	
568,	597.6,	604.5,	584.7,	578,	581,	601,	608,	619,	627,	
635,	642,	470,	580,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
];

var electronegativity = [
2.20,0,0.98,1.57,2.04,2.55,3.04,3.44,3.98,0,0.93,1.31,1.61,1.90,2.19,2.58,3.16,0,0.82,1.00,1.36,1.54,1.63,1.66,1.55,1.83,1.88,
1.91,1.90,1.65,1.81,2.01,2.18,2.55,2.96,3.00,0.82,0.95,1.22,1.33,1.60,2.16,1.90,2.20,2.28,2.20,1.93,1.69,1.78,1.96,2.05,2.10,
2.66,2.60,0.79,0.89,1.10,1.12,1.13,1.14,0,1.17,1.20,1.20,1.20,1.22,1.23,1.24,1.25,1.10,1.27,1.30,1.50,2.36,1.90,2.20,2.20,2.28,	
2.54,2.00,1.62,2.33,2.02,2.00,2.20,0,0.70,0.90,1.10,1.30,1.50,1.38,1.36,1.28,1.30,1.30,1.30,1.30,1.30,1.30,1.30,1.30,1.30,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
];

var meltingPoint = [
14.01,	0,	453.69,	1560,	2348,	3823,	63.05,	54.8,	53.5,	24.56,	
370.87,	923,	933.47,	1687,	317.3,	388.36,	171.6,	83.8,	336.53,	1115,	
1814,	1941,	2183,	2180,	1519,	1811,	1768,	1728,	1357.77,	692.58,	
302.91,	1211.4,	1090,	494,	265.8,	115.78,	312.46,	1050,	1799,	2128,	
2750,	2896,	2430,	2607,	2237,	1828.05,	1234.93,	594.22,	429.75,	505.08,	
903.78,	722.66,	386.85,	161.3,	301.59,	1000,	1193,	3633,	1204,	1294,	
1373,	1345,	1045,	1586,	1629,	1685,	1747,	1770,	1818,	1092,	
1936,	2506,	3290,	3695,	3459,	3306,	2739,	2041,	1337.33,	234.32,	
577,	600.61,	544.4,	527,	575,	202,	300,	973,	1323,	2023,	
1845,	1409,	917,	913,	1449,	1618,	1323,	1173,	1133,	1800,	
1100,	1100,	1900,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
];


var boilingPoint = [
20.28,4.22,1560.00,2742.00,4200.00,4300.00,77.36,90.20,85.03,27.07,1156.00,1363.00,2792.00,3538.00,550.00,717.87,239.11,
87.30,1032.00,1757.00,3109.00,3560.00,3680.00,2944.00,2334.00,3134.00,3200.00,3186.00,2835.00,1180.00,2477.00,3106.00,
887.00,958.00,332.00,119.93,961.00,1655.00,3609.00,4682.00,5017.00,4912.00,4538.00,4423.00,3968.00,3236.00,2435.00,1040.00,
2345.00,2875.00,1860.00,1261.00,457.40,165.03,944.00,2170.00,3737.00,3716.00,3793.00,3347.00,3273.00,2067.00,1802.00,3546.00,
3503.00,2840.00,2993.00,3141.00,2223.00,1469.00,3675.00,4876.00,5731.00,5828.00,5869.00,5285.00,4701.00,4098.00,3129.00,629.88,
1746.00,2022.00,1837.00,1235.00,610.00,211.30,950.00,2010.00,3471.00,5061.00,4300.00,4404.00,4273.00,3501.00,2880.00,3383.00,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
];


var heatCapacity = [
14300,	5193.1,	3570,	1820,	1030,	710,	1040,	919,	824,	1030,	
1230,	1020,	904,	710,	769.,	705,	478.2,	520.33,	757,	631,	
567,	520,	489,	448,	479,	449,	421,	445,	384.4,	388,	
371,	321.4,	328,	321.2,	947.3,	248.05,	364,	300,	298,	278,	
265,	251,	63,	238,	240,	240,	235,	230,	233,	217,	
207,	201,	429,	158.32,	242,	205,	195,	192,	193,	190,	
0,	196,	182,	240,	182,	167,	165,	168,	160,	154,	
154,	144,	140,	132,	137,	130,	131,	133,	129.1,	139.5,	
129,	127,	122,	0,	0,	93.65,	0,	92,	120,	118,	
99.1,	116,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
];

// --------------------------- electronAffinity----------------------------------------------------------------------
var electronAffinity = [
72.8,	0,	59.6,	0,	26.7,	153.9,	7,	141,	328,	0,	52.8,	0,	42.5,	133.6,	72,	200,	349,	0,	48.4,	2.37,	
18.1,	7.6,	50.6,	64.3,	0,	15.7,	63.7,	112,	118.4,	0,	28.9,	119,	78,	195,	324.6,	0,	46.9,	5.03,	29.6,	41.1,	
86.1,	71.9,	53,	101.3,	109.7,	53.7,	125.6,	0,	28.9,	107.3,	103.2,	190.2,	295.2,	0,	45.5,	13.95,	48,	50,	50,	50,	
50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	50,	0,	31,	78.6,	14.5,	106.1,	151,	205.3,	222.8,	0,	
19.2,	35.1,	91.2,	183.3,	270.1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	
0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
];
// ----------------------- modulus ----------------------------------------------------------------------------------
var modulus = [
0,	0,	11,	130,	320,	33,	0,	0,	0,	0,	6.3,	45,	76,	100,	11,	7.7,	1.1,	0,	3.1,	17,	
57,	110,	160,	160,	120,	170,	180,	180,	140,	70,	0,	0,	22,	83,	1.9,	0,	2.5,	0,	41,	0,	
170,	230,	0,	220,	380,	180,	100,	42,	0,	58,	42,	65,	7.7,	0,	1.6,	9.6,	28,	22,	29,	32,	
33,	38,	8.3,	38,	38.7,	41,	40,	44,	45,	31,	48,	110,	200,	310,	370,	0,	320,	230,	220,	25,	
43,	46,	31,	0,	0,	0,	0,	0,	0,	54,	0,	100,	0,	0,	0,	0,	0,	0,	0,	0,	
0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
];
// ----------------- conductivity -----------------------------------------------------------------------------------
var conductivity = [
0.1805,0.1513,85,190,27,140,0.02583,0.02658,0.0277,0.0491,140,160,235,150,0.236,0.205,0.0089,0.01772,100,200,
16,22,31,94,7.8,80,100,91,400,120,29,60,50,0.52,0.12,0.00943,58,35,17,23,
54,139,51,120,150,72,430,97,82,67,24,3,0.449,158.32,36,18,13,11,13,17,
15,13,14,11,11,11,16,15,17,39,16,23,57,170,48,88,150,72,320,8.3,
46,35,8,'-',2,0.00361,'-',19,12,54,47,27,6,6,10,'-',10,'-','-','-',
'-','-','-','-','-','-','-','-','-','-',
'-','-','-','-','-','-','-','-',
];
var valence = [
1,0,1,2,3,4,5,2,1,0,1,2,3,4,5,6,7,2,1,2,3,4,5,6,7,6,5,4,4,2,3,4,5,6,7,2,1,2,3,4,5,6,7,8,6,4,	
4,2,3,4,5,6,7,8,1,2,3,4,4,3,3,3,3,3,4,3,3,3,3,3,3,4,5,6,7,8,8,6,5,4,3,4,5,6,7,6,1,2,3,4,5,6,
7,8,6,4,4,4,3,3,3,3,3,4,5,6,7,8,'-','-','-','-','-',6,'-','-','-','-'];
// --------------------------- hardness -----------------------------------------------------------------------------------
var hardness = [
0,	0,	0,	600,	0,	0,	0,	0,	0,	0,	
0.690,	260,	245.000,	0,	0,	0,	0,	0,	0.363,	167.000,	
750,	716.000,	628.000,	1120,	196.000,	490,	700,	700,	874.000,	412.000,	
60,	0,	1440,	736.000,	0,	0,	0.216,	0,	589.000,	650,	
736.000,	1500,	0,	2160,	1100,	37.800,	24.500,	203.000,	8.830,	51.000,	
294.000,	180,	0,	0,	0.140,	0,	363.000,	412.000,	481.000,	265.000,	
0,	441.000,	0,	0,	677.000,	500,	746.000,	814.000,	471.000,	343.000,	
893.000,	1700,	800,	2570,	1320,	3920,	1670,	392.000,	25.000,	0,	
26.400,	38.300,	94.200,	0,	0,	0,	0,	0,	0,	400,	
0,	2400,	0,	0,	0,	0,	0,	0,	0,	0,	
0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	
0,	0,	0,	0,	0,	0,	0,	0
];
// --------------------------------------------------------------------------------------------------
// ----------------------------------------------- sortKeuse tabel ----------------------------------
// ------------ 1 ---------------------------------
var sortRadii = [
55,37,56,19,38,20,57,39,71,75,43,11,47,72,80,40,48,81,82,74,83,42,86,21,49,79,50,25,29,51,73,41,77,22,45,52,3,53,30,
46,12,54,76,78,24,27,31,44,23,26,32,28,33,13,34,35,14,36,15,16,17,18,4,5,6,7,8,9,10,1,2,58,59,60,61,62,63,64,65,66,67,
68,69,70,84,85,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,
115,116,117,118];
// ------------ 2 --------------------------------
var sortDensity = [
76,77,78,75,93,94,74,79,92,73,91,98,95,80,96,72,97,44,45,46,81,90,43,82,47,42,71,83,69,84,68,29,28,27,
67,48,41,66,65,64,26,62,49,50,25,61,24,30,60,70,59,58,51,40,52,57,23,31,33,88,
32,63,53,34,22,39,86,54,56,35,21,13,38,5,14,6,36,16,55,4,15,12,17,20,37,18,10,8,	
9,11,19,7,3,2,1,85,87,89,99,100,101,102,103,104,105,106,107,108,109,110,111,112,
113,114,115,116,117,118];
// ----------- 3 ---------------------------------
var sortIonizationEnergy = [
2,10,9,18,7,36,8,1,17,54,35,6,86,15,53,80,16,33,34,85,30,4,79,52,77,78,48,51,76,84,46,	
5,14,74,73,32,26,75,27,29,12,28,47,45,25,82,44,50,83,43,92,42,90,89,41,40,22,24,23,102,101,21,	
100,99,39,98,70,97,64,20,69,81,68,96,31,13,72,67,65,66,49,38,63,57,58,62,61,60,59,3,71,88,56,11,	
94,19,37,55,87,91,93,95,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
// ----------- 4 --------------------------------
var sortElectronegativity = [
9,8,17,7,35,53,16,6,34,79,45,78,1,44,46,76,77,85,15,33,42,52,51,5,83,32,80,84,50,47,28,14,29,43,
75,27,26,31,82,49,74,48,24,30,23,81,13,41,4,25,22,73,91,92,21,93,40,12,72,90,95,96,97,98,99,100,101,102,	
94,71,69,68,67,39,64,65,62,60,59,58,57,70,89,20,3,38,11,88,56,19,37,55,87,2,10,18,36,54,61,63,66,86,	
103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
// ---------- 5 ---------------------------------
var sortMeltingPoint = [
6,74,58,75,76,73,42,41,77,44,72,43,5,45,23,24,40,78,90,22,71,	
103,91,46,69,21,26,100,39,68,27,67,28,14,66,65,96,64,4,25,95,	
92,61,29,62,79,89,97,60,47,32,59,57,98,99,20,101,102,70,33,38,	
63,56,88,13,12,93,94,51,52,30,82,48,81,85,83,84,50,34,3,49,16,	
53,11,19,15,37,31,55,87,35,80,86,17,54,36,18,7,8,9,10,1,2,	
104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
// ---------- 6 ----------------------------------
var sortBoilingPoint = [
2,1,10,7,9,18,8,36,54,86,17,35,53,15,85,80,16,33,55,87,34,37,19,48,11,30,84,52,12,70,3,38,81,20,63,83,51,88,82,62,
56,69,25,49,47,31,4,13,29,66,50,95,24,67,32,21,79,26,68,28,27,46,61,60,96,89,94,65,14,64,22,39,71,23,58,57,59,45,78,
5,93,6,91,92,44,43,40,77,72,42,41,90,76,73,74,75,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,
115,116,117,118,
];
// ---------- 7 ---------------------------------
var sortHeatCapacity = [
1,2,3,4,11,7,5,10,12,35,8,13,9,15,19,6,14,16,20,21,	
18,22,23,25,17,26,24,28,53,27,30,29,31,37,33,32,34,38,39,40,	
41,42,36,55,45,46,64,44,47,49,48,50,51,56,52,62,57,59,58,60,	
63,65,68,66,67,69,54,70,71,72,73,80,75,78,74,77,76,79,81,82,	
83,89,90,92,91,86,88,43,61,84,85,87,93,94,95,96,97,98,99,100,	
101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
// ----------- 8 --------------------------------
var sortElectronAffinity = [
17,9,35,53,85,79,78,16,34,52,84,6,77,8,14,47,32,29,28,45,	
50,76,51,44,83,41,74,33,1,15,42,24,27,3,46,43,11,23,58,59,	
60,61,62,63,64,65,66,67,68,69,70,71,19,57,37,55,13,40,82,73,	
39,31,49,5,81,21,26,75,56,22,7,38,20,2,4,10,12,18,25,30,	
36,48,54,72,80,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,	
101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
// ------------- 9 -----------------------------
var sortConductivity = [
47,29,79,13,20,4,74,12,54,14,45,77,6,11,42,30,44,19,27,48,24,28,76,3,49,26,46,78,50,32,37,73,41,90,43,33,75,91,81,70,55,38,
82,23,31,5,92,51,40,72,22,88,56,39,60,69,21,67,71,61,68,63,57,59,62,89,58,64,65,66,95,97,80,83,25,93,94,52,85,34,53,15,16,1,
2,35,10,9,8,7,18,36,17,86,84,87,96,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118
];
// -------------- 10 ---------------------------
var sortValence = [
2,10,1,3,9,11,19,37,55,87,4,8,12,18,20,30,36,38,48,56,88,5,13,21,31,39,49,57,60,61,62,63,64,66,67,68,	
69,70,71,81,89,99,100,101,102,103,6,14,22,28,29,32,40,46,47,50,58,59,65,72,80,82,	90,96,97,98,104,7,15,	
23,27,33,41,51,73,79,83,91,105,16,24,26,34,42,45,52,74,78,84,86,92,95,106,114,17,25,35,43,53,75,85,93,107,44,
54,76,77,94,108,109,110,111,112,113,115,116,117,118];	
// -------------------- 11 -----------------------
var sortHardness = [
76,74,92,44,72,77,42,33,75,24,45,71,29,68,73,21,67,34,41,22,	
27,28,65,40,23,4,39,66,26,59,69,62,30,58,90,78,57,70,51,60,	
12,13,48,25,52,20,83,31,50,82,46,81,79,47,49,11,19,37,55,1,	
2,3,5,6,7,8,9,10,14,15,16,17,18,32,35,36,38,43,53,54,	
56,61,63,64,80,84,85,86,87,88,89,91,93,94,95,96,97,98,99,100,	
101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118
];
// -------------------- 12 -----------------------
var sortModulus = [
45,75,5,77,74,42,78,44,79,73,27,28,46,26,41,23,24,29,4,25,	
22,72,14,47,92,34,13,30,52,50,21,90,71,82,12,69,68,81,48,51,	
39,66,67,65,62,64,6,61,60,70,83,59,57,80,33,58,20,3,15,56,	
63,16,53,11,19,37,35,55,17,1,2,7,8,9,10,18,31,32,36,38,	
40,43,49,54,76,84,85,86,87,88,89,91,93,94,95,96,97,98,99,100,	
101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
// --------------------------------------------------------------------------

var sortCategory = [
2,10,18,36,54,86,118,                                           // noble gasses 0 - 6
3,11,19,37,55,87,                                               // alkali metals 7 - 12
4,12,20,38,56,88,                                               // earth metals 13 - 18
9,17,35,53,85,117,                                              // halogens 19 - 24
1,6,7,8,15,16,34,                                               // non metals 25 - 31
5,14,32,33,51,52,84,                                            // metaloids 32 - 38
13,31,49,50,81,82,83,113,114,115,116,                           // post transition 39 - 49 
21,22,23,24,25,26,27,28,29,30,39,40,41,42,43,44,45,46,47,48,    // transition metals 50 - 87 
72,73,74,75,76,77,78,79,80,104,105,106,107,108,109,110,111,112, 
57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,                   // lanthanoids 88 - 102
89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,               // actinoids 103 - 118 
];

//var sortOrbits = [
//1,3,11,19,37,55,4,12,20,38,56,21,39,22,40,23,41,24,42,25,43,26,44,27,45,28,46,29,47,30,48,
//5,13,31,49,6,14,32,50,7,15,33,51,8,16,34,52,9,17,35,53,2,10,18,36,54,
//];