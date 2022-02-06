const countryCodeMap = {
    'AFG' : 'Afghanistan',
    'ALA' : 'Åland Islands',
    'ALB' : 'Albania',
    'DZA' : 'Algeria',
    'ASM' : 'American Samoa',
    'AND' : 'Andorra',
    'AGO' : 'Angola',
    'AIA' : 'Anguilla',
    'ATA' : 'Antarctica',
    'ATG' : 'Antigua and Barbuda',
    'ARG' : 'Argentina',
    'ARM' : 'Armenia',
    'ABW' : 'Aruba',
    'AUS' : 'Australia',
    'AUT' : 'Austria',
    'AZE' : 'Azerbaijan',
    'BHS' : 'Bahamas',
    'BHR' : 'Bahrain',
    'BGD' : 'Bangladesh',
    'BRB' : 'Barbados',
    'BLR' : 'Belarus',
    'BEL' : 'Belgium',
    'BLZ' : 'Belize',
    'BEN' : 'Benin',
    'BMU' : 'Bermuda',
    'BTN' : 'Bhutan',
    'BOL' : 'Bolivia',
    'BES' : 'Bonaire',
    'BIH' : 'Bosnia and Herzegovina',
    'BWA' : 'Botswana',
    'BVT' : 'Bouvet Island',
    'BRA' : 'Brazil',
    'IOT' : 'British Indian Ocean Territory',
    'UMI' : 'United States Minor Outlying Islands',
    'VGB' : 'Virgin Islands (British)',
    'VIR' : 'Virgin Islands (US)',
    'BRN' : 'Brunei',
    'BGR' : 'Bulgaria',
    'BFA' : 'Burkina Faso',
    'BDI' : 'Burundi',
    'KHM' : 'Cambodia',
    'CMR' : 'Cameroon',
    'CAN' : 'Canada',
    'CPV' : 'Cabo Verde',
    'CYM' : 'Cayman Islands',
    'CAF' : 'Central African Republic',
    'TCD' : 'Chad',
    'CHL' : 'Chile',
    'CHN' : 'China',
    'CXR' : 'Christmas Island',
    'CCK' : 'Cocos Islands',
    'COL' : 'Colombia',
    'COM' : 'Comoros',
    'COG' : 'Congo',
    'COD' : 'Democratic Republic of the Congo',
    'COK' : 'Cook Islands',
    'CRI' : 'Costa Rica',
    'HRV' : 'Croatia',
    'CUB' : 'Cuba',
    'CUW' : 'Curaçao',
    'CYP' : 'Cyprus',
    'CZE' : 'Czech Republic',
    'DNK' : 'Denmark',
    'DJI' : 'Djibouti',
    'DMA' : 'Dominica',
    'DOM' : 'Dominican Republic',
    'ECU' : 'Ecuador',
    'EGY' : 'Egypt',
    'SLV' : 'El Salvador',
    'GNQ' : 'Equatorial Guinea',
    'ERI' : 'Eritrea',
    'EST' : 'Estonia',
    'ETH' : 'Ethiopia',
    'FLK' : 'Falkland Islands',
    'FRO' : 'Faroe Islands',
    'FJI' : 'Fiji',
    'FIN' : 'Finland',
    'FRA' : 'France',
    'GUF' : 'French Guiana',
    'PYF' : 'French Polynesia',
    'ATF' : 'French Southern and Antarctic Lands',
    'GAB' : 'Gabon',
    'GMB' : 'Gambia',
    'GEO' : 'Georgia',
    'DEU' : 'Germany',
    'GHA' : 'Ghana',
    'GIB' : 'Gibraltar',
    'GRC' : 'Greece',
    'GRL' : 'Greenland',
    'GRD' : 'Grenada',
    'GLP' : 'Guadeloupe',
    'GUM' : 'Guam',
    'GTM' : 'Guatemala',
    'GGY' : 'Guernsey',
    'GIN' : 'Guinea',
    'GNB' : 'Guinea-Bissau',
    'GUY' : 'Guyana',
    'HTI' : 'Haiti',
    'HMD' : 'Heard Island and McDonald Islands',
    'VAT' : 'Holy See',
    'HND' : 'Honduras',
    'HKG' : 'Hong Kong',
    'HUN' : 'Hungary',
    'ISL' : 'Iceland',
    'IND' : 'India',
    'IDN' : 'Indonesia',
    'CIV' : 'Côte d\'Ivoire',
    'IRN' : 'Iran',
    'IRQ' : 'Iraq',
    'IRL' : 'Ireland',
    'IMN' : 'Isle of Man',
    'ISR' : 'Israel',
    'ITA' : 'Italy',
    'JAM' : 'Jamaica',
    'JPN' : 'Japan',
    'JEY' : 'Jersey',
    'JOR' : 'Jordan',
    'KAZ' : 'Kazakhstan',
    'KEN' : 'Kenya',
    'KIR' : 'Kiribati',
    'KWT' : 'Kuwait',
    'KGZ' : 'Kyrgyzstan',
    'LAO' : 'Laos',
    'LVA' : 'Latvia',
    'LBN' : 'Lebanon',
    'LSO' : 'Lesotho',
    'LBR' : 'Liberia',
    'LBY' : 'Libya',
    'LIE' : 'Liechtenstein',
    'LTU' : 'Lithuania',
    'LUX' : 'Luxembourg',
    'MAC' : 'Macao',
    'MKD' : 'Macedonia',
    'MDG' : 'Madagascar',
    'MWI' : 'Malawi',
    'MYS' : 'Malaysia',
    'MDV' : 'Maldives',
    'MLI' : 'Mali',
    'MLT' : 'Malta',
    'MHL' : 'Marshall Islands',
    'MTQ' : 'Martinique',
    'MRT' : 'Mauritania',
    'MUS' : 'Mauritius',
    'MYT' : 'Mayotte',
    'MEX' : 'Mexico',
    'FSM' : 'Micronesia',
    'MDA' : 'Moldova',
    'MCO' : 'Monaco',
    'MNG' : 'Mongolia',
    'MNE' : 'Montenegro',
    'MSR' : 'Montserrat',
    'MAR' : 'Morocco',
    'MOZ' : 'Mozambique',
    'MMR' : 'Myanmar',
    'NAM' : 'Namibia',
    'NRU' : 'Nauru',
    'NPL' : 'Nepal',
    'NLD' : 'Netherlands',
    'NCL' : 'New Caledonia',
    'NZL' : 'New Zealand',
    'NIC' : 'Nicaragua',
    'NER' : 'Niger',
    'NGA' : 'Nigeria',
    'NIU' : 'Niue',
    'NFK' : 'Norfolk Island',
    'PRK' : 'North Korea',
    'MNP' : 'Northern Mariana Islands',
    'NOR' : 'Norway',
    'OMN' : 'Oman',
    'PAK' : 'Pakistan',
    'PLW' : 'Palau',
    'PSE' : 'Palestine',
    'PAN' : 'Panama',
    'PNG' : 'Papua New Guinea',
    'PRY' : 'Paraguay',
    'PER' : 'Peru',
    'PHL' : 'Philippines',
    'PCN' : 'Pitcairn',
    'POL' : 'Poland',
    'PRT' : 'Portugal',
    'PRI' : 'Puerto Rico',
    'QAT' : 'Qatar',
    'KOS' : 'Kosovo',
    'REU' : 'Réunion',
    'ROU' : 'Romania',
    'RUS' : 'Russia',
    'RWA' : 'Rwanda',
    'BLM' : 'Saint Barthélemy',
    'SHN' : 'Saint Helena',
    'KNA' : 'Saint Kitts and Nevis',
    'LCA' : 'Saint Lucia',
    'MAF' : 'Saint Martin',
    'SPM' : 'Saint Pierre and Miquelon',
    'VCT' : 'Saint Vincent and the Grenadines',
    'WSM' : 'Samoa',
    'SMR' : 'San Marino',
    'STP' : 'Sao Tome and Principe',
    'SAU' : 'Saudi Arabia',
    'SEN' : 'Senegal',
    'SRB' : 'Serbia',
    'SYC' : 'Seychelles',
    'SLE' : 'Sierra Leone',
    'SGP' : 'Singapore',
    'SXM' : 'Sint Maarten',
    'SVK' : 'Slovakia',
    'SVN' : 'Slovenia',
    'SLB' : 'Solomon Islands',
    'SOM' : 'Somalia',
    'ZAF' : 'South Africa',
    'SGS' : 'South Georgia and the South Sandwich Islands',
    'KOR' : 'South Korea',
    'SSD' : 'South Sudan',
    'ESP' : 'Spain',
    'LKA' : 'Sri Lanka',
    'SDN' : 'Sudan',
    'SUR' : 'Suriname',
    'SJM' : 'Svalbard and Jan Mayen',
    'SWZ' : 'Swaziland',
    'SWE' : 'Sweden',
    'CHE' : 'Switzerland',
    'SYR' : 'Syria',
    'TWN' : 'Taiwan',
    'TJK' : 'Tajikistan',
    'TZA' : 'Tanzania',
    'THA' : 'Thailand',
    'TLS' : 'Timor-Leste',
    'TGO' : 'Togo',
    'TKL' : 'Tokelau',
    'TON' : 'Tonga',
    'TTO' : 'Trinidad and Tobago',
    'TUN' : 'Tunisia',
    'TUR' : 'Turkey',
    'TKM' : 'Turkmenistan',
    'TCA' : 'Turks and Caicos Islands',
    'TUV' : 'Tuvalu',
    'UGA' : 'Uganda',
    'UKR' : 'Ukraine',
    'ARE' : 'United Arab Emirates',
    'GBR' : 'United Kingdom of Great Britain and Northern Ireland',
    'USA' : 'United States of America',
    'URY' : 'Uruguay',
    'UZB' : 'Uzbekistan',
    'VUT' : 'Vanuatu',
    'VEN' : 'Venezuela',
    'VNM' : 'Vietnam',
    'WLF' : 'Wallis and Futuna',
    'ESH' : 'Western Sahara',
    'YEM' : 'Yemen',
    'ZMB' : 'Zambia',
    'ZWE' : 'Zimbabwe'}

function getCountryNamesByAlphaCodes(alphaCodes) {
    let alphaCodesList = alphaCodes.split(", ");
    let countryNames = [];
    
    for (let i = 0; i < alphaCodesList.length; i++) {
        countryNames.push(countryCodeMap[alphaCodesList[i]]);
    }

    return countryNames;
}