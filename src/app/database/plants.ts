interface Content {
    title: string
    value: string
    suffix?: string
}

export interface Planet {
    name: string
    size: number
    speed: number
    content: {
        name: string
        description: string
        info: Content[]
    }
}

function age(value: string): Content {
    return {
        title: 'سن',
        value: value,
        suffix: 'میلیارد سال'
    }
}

function time(value: string): Content {
    return {
        title: 'فاصله زمانی از زمین',
        value: value,
        suffix: 'دقیقه با سرعت نور'
    }
}

function mass(value: string): Content {
    return {
        title: 'جرم',
        value: value,
        suffix: '×&nbsp;10<sup>24</sup> کیلوگرم'
    }
}

function tempature(value: string): Content {
    return {
        title: 'دما',
        value: value,
        suffix: 'سیلیسوس'
    }
}

function gravity(value: string): Content {
    return {
        title: 'گرانش',
        value: value,
        suffix: 'متر بر ثانیه<sup>2</sup>'
    }
}

function density(value: string): Content {
    return {
        title: 'چگالی',
        value: value,
        suffix: 'کیلوگرم بر متر مکعب'
    }
}

function diameter(value: string): Content {
    return {
        title: 'قطر',
        value: value,
        suffix: 'کیلومتر'
    }
}

function day(value: string): Content {
    return {
        title: 'طول روز',
        value: value,
        suffix: 'ساعت'
    }
}

function moons(value: string): Content {
    return {
        title: 'تعداد ماه ها',
        value: value == '0' ? 'ندارد' : value,
        suffix: value == '0' ? '' : 'ماه'
    }
}

function info(Age: string, Time: string, Tempature: string, Mass: string, Gravity: string, Density: string, Diameter: string, Day: string, Moons: string): Content[] {
    let contents = [
        age(Age),
        time(Time),
        tempature(Tempature),
        mass(Mass),
        gravity(Gravity),
        density(Density),
        diameter(Diameter),
        day(Day),
    ]
    if (Moons != '-1') contents.push(moons(Moons));
    return contents;
}

export const planets: Planet[] = [
    {
        name: 'sun',
        size: 0.8,
        speed: 60,
        content: {
            name: 'خورشید',
            description: 'خورشید تنها ستاره روشن در منظومه شمسی که در مرکز آن قرار دارد. ',
            info: info(
                '4.603',
                '8.3',
                '5498.85',
                '1,988,500',
                '274',
                '1,408',
                '1.3927 میلیون',
                '588',
                '-1'
            ),
        }
    },
    {
        name: 'mercury',
        size: 0.35,
        speed: 30,
        content: {
            name: 'عطارد',
            description: 'اولین سیاره منظورمه شمسی',
            info: info('4.503', '5', '167', '0.33', '3.7', '5,427', '4,879', '4222', '0')
        }
    },
    {
        name: 'venus',
        size: 0.6,
        speed: 20,
        content: {
            name: 'زهره',
            description: 'دومین سیاره منظومه شمسی',
            info: info('4.503', '2.3', '464', '4.87', '8.9', '5243', '12,104', '2802', '0')
        }
    },
    {
        name: 'earth',
        size: 0.65,
        speed: 40,
        content: {
            name: 'زمین',
            description: 'سومین سیاره منظومه شمسی',
            info: info('4.543', '0', '15', '5.97', '9.8', '5514', '12.756', '24', '1')
        }
    },
    {
        name: 'mars',
        size: 0.38,
        speed: 35,
        content: {
            name: 'مریخ',
            description: 'چهارمین سیاره منظومه شمسی',
            info: info('4.603', '4.4', '-65', '0.642', '3.7', '3933', '6792', '24.7', '2')
        }
    },
    {
        name: 'jupiter',
        size: 0.75,
        speed: 10,
        content: {
            name: 'مشتری',
            description: 'پنجمین سیاره منظومه شمسی',
            info: info('4.503', '34.7', '-110', '1898', '23.1', '1326', '142,984', '9.9', '79')
        }
    },
    {
        name: 'saturn',
        size: 0.7,
        speed: 8,
        content: {
            name: 'زحل',
            description: 'ششمین سیاره منظومه شمسی',
            info: info('4.503', '69.7', '-140', '568', '9', '687', '120,536', '10.7', '82'),
        }
    },
    {
        name: 'uranus',
        size: 0.43,
        speed: 7,
        content: {
            name: 'اورانوس',
            description: 'هفتمین سیاره منظومه شمسی',
            info: info('4.503', '153.7', '-195', '86.8', '8.7', '1271', '51.118', '17.2', '27'),
        }
    },
    {
        name: 'neptune',
        size: 0.4,
        speed: 6,
        content: {
            name: 'پلوتون',
            description: 'هشتمین سیاره منظومه شمسی',
            info: info('4.503', '243.7', '-200', '102', '11', '1638', '49,528', '16.1', '14'),
        }
    }
];