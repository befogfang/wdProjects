const countryList = {
    AF:"Afghanistan",
    AX:"AlandIslands",
    AL:"Albania",
    DZ:"Algeria",
    AS:"AmericanSamoa",
    AD:"Andorra",
    AO:"Angola",
    AI:"Anguilla",
    AQ:"Antarctica",
    AG:"AntiguaAndBarbuda",
    AR:"Argentina",
    AM:"Armenia",
    AW:"Aruba",
    AU:"Australia",
    AT:"Austria",
    AZ:"Azerbaijan",
    BS:"Bahamas",
    BH:"Bahrain",
    BD:"Bangladesh",
    BB:"Barbados",
    BY:"Belarus",
    BE:"Belgium",
    BZ:"Belize",
    BJ:"Benin",
    BM:"Bermuda",
    BT:"Bhutan",
    BO:"Bolivia",
    BA:"BosniaAndHerzegovina",
    BW:"Botswana",
    BV:"BouvetIsland",
    BR:"Brazil",
    IO:"BritishIndianOceanTerritory",
    BN:"BruneiDarussalam",
    BG:"Bulgaria",
    BF:"BurkinaFaso",
    BI:"Burundi",
    KH:"Cambodia",
    CM:"Cameroon",
    CA:"Canada",
    CV:"CapeVerde",
    KY:"CaymanIslands",
    CF:"CentralAfricanRepublic",
    TD:"Chad",
    CL:"Chile",
    CN:"China",
    CX:"ChristmasIsland",
    CC:"Cocos(Keeling)Islands",
    CO:"Colombia",
    KM:"Comoros",
    CG:"Congo",
    CD:"Congo,DemocraticRepublic",
    CK:"CookIslands",
    CR:"CostaRica",
    CI:"CoteDIvoire",
    HR:"Croatia",
    CU:"Cuba",
    CY:"Cyprus",
    CZ:"CzechRepublic",
    DK:"Denmark",
    DJ:"Djibouti",
    DM:"Dominica",
    DO:"DominicanRepublic",
    EC:"Ecuador",
    EG:"Egypt",
    SV:"ElSalvador",
    GQ:"EquatorialGuinea",
    ER:"Eritrea",
    EE:"Estonia",
    ET:"Ethiopia",
    FK:"FalklandIslands(Malvinas)",
    FO:"FaroeIslands",
    FJ:"Fiji",
    FI:"Finland",
    FR:"France",
    GF:"FrenchGuiana",
    PF:"FrenchPolynesia",
    TF:"FrenchSouthernTerritories",
    GA:"Gabon",
    GM:"Gambia",
    GE:"Georgia",
    DE:"Germany",
    GH:"Ghana",
    GI:"Gibraltar",
    GR:"Greece",
    GL:"Greenland",
    GD:"Grenada",
    GP:"Guadeloupe",
    GU:"Guam",
    GT:"Guatemala",
    GG:"Guernsey",
    GN:"Guinea",
    GW:"Guinea-Bissau",
    GY:"Guyana",
    HT:"Haiti",
    HM:"HeardIsland&McdonaldIslands",
    VA:"HolySee(VaticanitState)",
    HN:"Honduras",
    HK:"HongKong",
    HU:"Hungary",
    IS:"Iceland",
    IN:"India",
    ID:"Indonesia",
    IR:"Iran,IslamicRepublicf",
    IQ:"Iraq",
    IE:"Ireland",
    IM:"IsleOfMan",
    IL:"Israel",
    IT:"Italy",
    JM:"Jamaica",
    JP:"Japan",
    JE:"Jersey",
    JO:"Jordan",
    KZ:"Kazakhstan",
    KE:"Kenya",
    KI:"Kiribati",
    KR:"Korea",
    KW:"Kuwait",
    KG:"Kyrgyzstan",
    LA:"LaPeoplesDemocraticRepublic",
    LV:"Latvia",
    LB:"Lebanon",
    LS:"Lesotho",
    LR:"Liberia",
    LY:"LibyanraJamahiriya",
    LI:"Liechtenstein",
    LT:"Lithuania",
    LU:"Luxembourg",
    MO:"Macao",
    MK:"Macedonia",
    MG:"Madagascar",
    MW:"Malawi",
    MY:"Malaysia",
    MV:"Maldives",
    ML:"Mali",
    MT:"Malta",
    MH:"MarshallIslands",
    MQ:"Martinique",
    MR:"Mauritania",
    MU:"Mauritius",
    YT:"Mayotte",
    MX:"Mexico",
    FM:"Micronesia,FederatedStatesf",
    MD:"Moldova",
    MC:"Monaco",
    MN:"Mongolia",
    ME:"Montenegro",
    MS:"Montserrat",
    MA:"Morocco",
    MZ:"Mozambique",
    MM:"Myanmar",
    NA:"Namibia",
    NR:"Nauru",
    NP:"Nepal",
    NL:"Netherlands",
    AN:"NetherlandsAntilles",
    NC:"NeCaledonia",
    NZ:"NeZealand",
    NI:"Nicaragua",
    NE:"Niger",
    NG:"Nigeria",
    NU:"Niue",
    NF:"NorfolkIsland",
    MP:"NorthernMarianaIslands",
    NO:"Norway",
    OM:"Oman",
    PK:"Pakistan",
    PW:"Palau",
    PS:"PalestinianTerritory,Occupied",
    PA:"Panama",
    PG:"PapuaNewGuinea",
    PY:"Paraguay",
    PE:"Peru",
    PH:"Philippines",
    PN:"Pitcairn",
    PL:"Poland",
    PT:"Portugal",
    PR:"PuertoRico",
    QA:"Qatar",
    RE:"Reunion",
    RO:"Romania",
    RU:"RussianFederation",
    RW:"Rwanda",
    BL:"SaintBarthelemy",
    SH:"SaintHelena",
    KN:"SaintKittsAndNevis",
    LC:"SaintLucia",
    MF:"SaintMartin",
    PM:"SaintPierreAndMiquelon",
    VC:"SaintVincentAndGrenadines",
    WS:"Samoa",
    SM:"SaMarino",
    ST:"SaomAndPrincipe",
    SA:"SaudiArabia",
    SN:"Senegal",
    RS:"Serbia",
    SC:"Seychelles",
    SL:"SierraLeone",
    SG:"Singapore",
    SK:"Slovakia",
    SI:"Slovenia",
    SB:"SolomonIslands",
    SO:"Somalia",
    ZA:"SouthAfrica",
    GS:"SouthGeorgiaAndSandwichIsl.",
    ES:"Spain",
    LK:"SrLanka",
    SD:"Sudan",
    SR:"Suriname",
    SJ:"SvalbardAndJanMayen",
    SZ:"Swaziland",
    SE:"Sweden",
    CH:"Switzerland",
    SY:"SyrianraRepublic",
    TW:"Taiwan",
    TJ:"Tajikistan",
    TZ:"Tanzania",
    TH:"Thailand",
    TL:"Timor-Leste",
    TG:"Togo",
    TK:"Tokelau",
    TO:"Tonga",
    TT:"TrinidadAndTobago",
    TN:"Tunisia",
    TR:"Turkey",
    TM:"Turkmenistan",
    TC:"TurksAndCaicosIslands",
    TV:"Tuvalu",
    UG:"Uganda",
    UA:"Ukraine",
    AE:"UnitedraEmirates",
    GB:"UnitedKingdom",
    US:"UnitedStates",
    UM:"UnitedStatesOutlyingIslands",
    UY:"Uruguay",
    UZ:"Uzbekistan",
    VU:"Vanuatu",
    VE:"Venezuela",
    VN:"VietNam",
    VG:"VirginIslands,British",
    VI:"VirginIslands,U.S.",
    WF:"WallisAndFutuna",
    EH:"WesternSahara",
    YE:"Yemen",
    ZM:"Zambia",
    ZW:"Zimbabwe"
};

//Flag 
let flag = document.querySelector(".photo img");

let cLKey = Object.keys(countryList);   
let cLValue =Object.values(countryList);
     
function randomCountrySelector(){
        let ranNum = Math.round(Math.random()*(cLKey.length));
        return ranNum ;
    }

let randomNumberFromFunction = randomCountrySelector();
    
let imagelinkapi = `https://flagsapi.com/${cLKey[randomNumberFromFunction]}/shiny/64.png`;

flag.setAttribute( "src",imagelinkapi);

//Final messages

let messages = document.querySelector(".final-msg p");

// option logic 

let valForOpt1 = `${cLValue[randomNumberFromFunction]}`;


let option1 =document.querySelector(".first-opt");
let option2 =document.querySelector(".second-opt");

function ranOptButton(){
    let rNo = Math.round(Math.random()*245);
    
    if(rNo%2 == 0){
        let bCoA = option2.innerText=`${cLValue[rNo]}`; 
        option1.innerText= valForOpt1 ;
      return bCoA;

    }
    else{
        let bCoA =option1.innerText=`${cLValue[rNo]}`;
        option2.innerText= valForOpt1 ;
        return bCoA;
    }
} 
let ranOptionButton = ranOptButton();

let hint = document.querySelector(".hint");
hint.innerText =`${cLValue[randomNumberFromFunction]}`;

//Logic for message to be shown
console.log(ranOptionButton);

function  checkCorrectOption() {
    if (condition) {
        
    }
  }

if (ranOptionButton = valForOpt1) {
    messages.innerText ="Correct Answer";
} else {
    messages.innerText="Wrong Answer";
}