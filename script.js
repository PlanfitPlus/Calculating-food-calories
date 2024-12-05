// قاعدة بيانات الأطعمة مع القيم الغذائية
const foodDatabase = {
    // البروتينات الحيوانية
    grilled_chicken: { calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: "100 جرام" },
    lean_beef: { calories: 250, protein: 26, carbs: 0, fat: 15, serving: "100 جرام" },
    turkey: { calories: 135, protein: 30, carbs: 0, fat: 3, serving: "100 جرام" },
    salmon: { calories: 208, protein: 22, carbs: 0, fat: 13, serving: "100 جرام" },
    tuna: { calories: 184, protein: 30, carbs: 0, fat: 6, serving: "100 جرام" },
    cod: { calories: 82, protein: 18, carbs: 0, fat: 0.7, serving: "100 جرام" },
    shrimp: { calories: 85, protein: 20, carbs: 0, fat: 1.1, serving: "100 جرام" },
    lamb: { calories: 294, protein: 25, carbs: 0, fat: 21, serving: "100 جرام" },
    veal: { calories: 172, protein: 24, carbs: 0, fat: 8, serving: "100 جرام" },
    
    // منتجات الألبان والبيض
    egg_white: { calories: 52, protein: 11, carbs: 0.7, fat: 0.2, serving: "100 جرام" },
    whole_egg: { calories: 155, protein: 13, carbs: 1.1, fat: 11, serving: "100 جرام" },
    greek_yogurt: { calories: 59, protein: 10, carbs: 3.6, fat: 0.4, serving: "100 جرام" },
    low_fat_milk: { calories: 42, protein: 3.4, carbs: 5, fat: 1, serving: "100 مل" },
    ricotta: { calories: 174, protein: 11, carbs: 3, fat: 13, serving: "100 جرام" },
    cheddar: { calories: 403, protein: 25, carbs: 1.3, fat: 33, serving: "100 جرام" },
    mozzarella: { calories: 280, protein: 28, carbs: 2.2, fat: 17, serving: "100 جرام" },
    feta: { calories: 264, protein: 14, carbs: 4.1, fat: 21, serving: "100 جرام" },

    // البروتينات النباتية
    tofu: { calories: 76, protein: 8, carbs: 1.9, fat: 4.8, serving: "100 جرام" },
    tempeh: { calories: 192, protein: 20, carbs: 7.6, fat: 11, serving: "100 جرام" },
    lentils: { calories: 116, protein: 9, carbs: 20, fat: 0.4, serving: "100 جرام" },
    chickpeas: { calories: 164, protein: 8.9, carbs: 27, fat: 2.6, serving: "100 جرام" },
    black_beans: { calories: 132, protein: 8.9, carbs: 23, fat: 0.5, serving: "100 جرام" },
    
    // الحبوب والنشويات
    brown_rice: { calories: 111, protein: 2.6, carbs: 23, fat: 0.9, serving: "100 جرام" },
    quinoa: { calories: 120, protein: 4.4, carbs: 21, fat: 1.9, serving: "100 جرام" },
    oats: { calories: 389, protein: 16.9, carbs: 66, fat: 6.9, serving: "100 جرام" },
    sweet_potato: { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, serving: "100 جرام" },
    whole_grain_bread: { calories: 247, protein: 13, carbs: 41, fat: 3.5, serving: "100 جرام" },

    // الخضروات
    spinach: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, serving: "100 جرام" },
    carrot: { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, serving: "100 جرام" },
    broccoli: { calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, serving: "100 جرام" },
    cauliflower: { calories: 25, protein: 1.9, carbs: 5.0, fat: 0.3, serving: "100 جرام" },
    cucumber: { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, serving: "100 جرام" },
    tomato: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, serving: "100 جرام" },
    bell_pepper: { calories: 31, protein: 1.0, carbs: 6.0, fat: 0.3, serving: "100 جرام" },
    zucchini: { calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3, serving: "100 جرام" },
    eggplant: { calories: 25, protein: 1.0, carbs: 6.0, fat: 0.2, serving: "100 جرام" },
    green_beans: { calories: 31, protein: 1.8, carbs: 7.0, fat: 0.2, serving: "100 جرام" },
    okra: { calories: 33, protein: 1.9, carbs: 7.0, fat: 0.2, serving: "100 جرام" },
    artichoke: { calories: 47, protein: 3.3, carbs: 10.5, fat: 0.2, serving: "100 جرام" },
    asparagus: { calories: 20, protein: 2.2, carbs: 3.9, fat: 0.2, serving: "100 جرام" },
    beetroot: { calories: 43, protein: 1.6, carbs: 9.6, fat: 0.2, serving: "100 جرام" },
    cabbage: { calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1, serving: "100 جرام" },
    celery: { calories: 16, protein: 0.7, carbs: 3.0, fat: 0.2, serving: "100 جرام" },
    garlic: { calories: 149, protein: 6.4, carbs: 33.1, fat: 0.5, serving: "100 جرام" },
    onion: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, serving: "100 جرام" },
    parsley: { calories: 36, protein: 3.0, carbs: 6.3, fat: 0.8, serving: "100 جرام" },
    radish: { calories: 16, protein: 0.7, carbs: 3.4, fat: 0.1, serving: "100 جرام" },
    bamboo_shoots: { calories: 27, protein: 2.6, carbs: 5.2, fat: 0.3, serving: "100 جرام" },
    bok_choy: { calories: 13, protein: 1.5, carbs: 2.2, fat: 0.2, serving: "100 جرام" },
    brussels_sprouts: { calories: 43, protein: 3.4, carbs: 9, fat: 0.3, serving: "100 جرام" },
    chicory: { calories: 23, protein: 1.7, carbs: 4.7, fat: 0.2, serving: "100 جرام" },
    chinese_cabbage: { calories: 16, protein: 1.2, carbs: 3.2, fat: 0.2, serving: "100 جرام" },
    chives: { calories: 30, protein: 3.3, carbs: 4.4, fat: 0.7, serving: "100 جرام" },
    collard_greens: { calories: 32, protein: 3, carbs: 5.7, fat: 0.6, serving: "100 جرام" },
    coriander: { calories: 23, protein: 2.1, carbs: 3.7, fat: 0.5, serving: "100 جرام" },
    dill: { calories: 43, protein: 3.5, carbs: 7, fat: 1.1, serving: "100 جرام" },
    endive: { calories: 17, protein: 1.3, carbs: 3.3, fat: 0.2, serving: "100 جرام" },
    fennel: { calories: 31, protein: 1.2, carbs: 7.3, fat: 0.2, serving: "100 جرام" },
    fenugreek: { calories: 49, protein: 3.4, carbs: 6, fat: 0.9, serving: "100 جرام" },
    ginger: { calories: 80, protein: 1.8, carbs: 18, fat: 0.8, serving: "100 جرام" },
    horseradish: { calories: 48, protein: 1.2, carbs: 11, fat: 0.7, serving: "100 جرام" },
    kale: { calories: 49, protein: 4.3, carbs: 8.8, fat: 0.9, serving: "100 جرام" },
    kohlrabi: { calories: 27, protein: 1.7, carbs: 6.2, fat: 0.1, serving: "100 جرام" },
    leeks: { calories: 61, protein: 1.5, carbs: 14, fat: 0.3, serving: "100 جرام" },
    lettuce: { calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, serving: "100 جرام" },
    mint: { calories: 44, protein: 3.8, carbs: 8.4, fat: 0.9, serving: "100 جرام" },
    mushrooms: { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, serving: "100 جرام" },
    mustard_greens: { calories: 27, protein: 2.9, carbs: 4.7, fat: 0.4, serving: "100 جرام" },
    scallions: { calories: 32, protein: 1.8, carbs: 7.3, fat: 0.2, serving: "100 جرام" },
    seaweed: { calories: 43, protein: 5.8, carbs: 9.1, fat: 0.5, serving: "100 جرام" },
    shallots: { calories: 72, protein: 2.5, carbs: 17, fat: 0.1, serving: "100 جرام" },
    sorrel: { calories: 22, protein: 2, carbs: 3.2, fat: 0.7, serving: "100 جرام" },
    soybean_sprouts: { calories: 52, protein: 5.9, carbs: 5.9, fat: 1.1, serving: "100 جرام" },
    squash: { calories: 26, protein: 1, carbs: 6.5, fat: 0.1, serving: "100 جرام" },
    sweet_potato: { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, serving: "100 جرام" },
    swiss_chard: { calories: 19, protein: 1.8, carbs: 3.7, fat: 0.2, serving: "100 جرام" },
    taro: { calories: 112, protein: 1.5, carbs: 26, fat: 0.2, serving: "100 جرام" },
    turnip: { calories: 28, protein: 0.9, carbs: 6.4, fat: 0.1, serving: "100 جرام" },
    watercress: { calories: 11, protein: 2.3, carbs: 1.3, fat: 0.1, serving: "100 جرام" },
    water_spinach: { calories: 19, protein: 2.6, carbs: 3.1, fat: 0.2, serving: "100 جرام" },
    winter_melon: { calories: 13, protein: 0.4, carbs: 3, fat: 0.2, serving: "100 جرام" },
    yam: { calories: 118, protein: 1.5, carbs: 28, fat: 0.2, serving: "100 جرام" },
    zucchini: { calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3, serving: "100 جرام" },

    // خضروات إضافية
    sweet_potato: { calories: 86, protein: 1.6, carbs: 20.1, fat: 0.1, serving: "100 جرام" },
    pumpkin: { calories: 26, protein: 1.0, carbs: 6.5, fat: 0.1, serving: "100 جرام" },
    mushrooms: { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, serving: "100 جرام" },
    corn: { calories: 86, protein: 3.2, carbs: 19.0, fat: 1.2, serving: "100 جرام" },
    green_peas: { calories: 81, protein: 5.4, carbs: 14.5, fat: 0.4, serving: "100 جرام" },
    brussels_sprouts: { calories: 43, protein: 3.4, carbs: 9.0, fat: 0.3, serving: "100 جرام" },
    sweet_pepper: { calories: 20, protein: 0.9, carbs: 4.6, fat: 0.2, serving: "100 جرام" },
    lettuce: { calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, serving: "100 جرام" },
    watercress: { calories: 11, protein: 2.3, carbs: 1.3, fat: 0.1, serving: "100 جرام" },
    turnip: { calories: 28, protein: 0.9, carbs: 6.4, fat: 0.1, serving: "100 جرام" },
    leek: { calories: 61, protein: 1.5, carbs: 14.2, fat: 0.3, serving: "100 جرام" },
    kale: { calories: 49, protein: 4.3, carbs: 8.8, fat: 0.9, serving: "100 جرام" },
    arugula: { calories: 25, protein: 2.6, carbs: 3.7, fat: 0.7, serving: "100 جرام" },
    green_onion: { calories: 32, protein: 1.8, carbs: 7.3, fat: 0.2, serving: "100 جرام" },
    red_cabbage: { calories: 31, protein: 1.4, carbs: 7.4, fat: 0.2, serving: "100 جرام" },

    // الفواكه
    apple: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, serving: "100 جرام" },
    banana: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, serving: "100 جرام" },
    orange: { calories: 47, protein: 0.9, carbs: 12, fat: 0.1, serving: "100 جرام" },
    strawberry: { calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, serving: "100 جرام" },
    blueberry: { calories: 57, protein: 0.7, carbs: 14, fat: 0.3, serving: "100 جرام" },

    // الفواكه الطازجة
    dates_fresh: { calories: 282, protein: 2.5, carbs: 75, fat: 0.4, serving: "100 جرام" },
    figs_fresh: { calories: 74, protein: 0.8, carbs: 19.2, fat: 0.3, serving: "100 جرام" },
    pomegranate: { calories: 83, protein: 1.7, carbs: 18.7, fat: 1.2, serving: "100 جرام" },
    mulberry: { calories: 43, protein: 1.4, carbs: 9.8, fat: 0.4, serving: "100 جرام" },
    loquat: { calories: 47, protein: 0.4, carbs: 12.1, fat: 0.2, serving: "100 جرام" },
    guava: { calories: 68, protein: 2.6, carbs: 14.3, fat: 0.9, serving: "100 جرام" },
    custard_apple: { calories: 94, protein: 2.1, carbs: 23.6, fat: 0.6, serving: "100 جرام" },
    prickly_pear: { calories: 41, protein: 0.7, carbs: 9.6, fat: 0.5, serving: "100 جرام" },
    
    // الفواكه المجففة
    dates_dried: { calories: 282, protein: 2.5, carbs: 75, fat: 0.4, serving: "100 جرام" },
    figs_dried: { calories: 249, protein: 3.3, carbs: 63.9, fat: 0.9, serving: "100 جرام" },
    raisins: { calories: 299, protein: 3.1, carbs: 79.2, fat: 0.5, serving: "100 جرام" },
    apricots_dried: { calories: 241, protein: 3.4, carbs: 62.6, fat: 0.5, serving: "100 جرام" },
    prunes: { calories: 240, protein: 2.2, carbs: 63.9, fat: 0.4, serving: "100 جرام" },
    dried_banana: { calories: 346, protein: 3.9, carbs: 88.3, fat: 1.8, serving: "100 جرام" },
    dried_mango: { calories: 314, protein: 2.5, carbs: 76.8, fat: 1.2, serving: "100 جرام" },
    dried_strawberries: { calories: 333, protein: 3.8, carbs: 82.1, fat: 0.7, serving: "100 جرام" },
    dried_blueberries: { calories: 308, protein: 3.1, carbs: 79.2, fat: 0.5, serving: "100 جرام" },
    dried_cranberries: { calories: 308, protein: 0.2, carbs: 82.4, fat: 1.4, serving: "100 جرام" },
    dried_cherries: { calories: 325, protein: 3.2, carbs: 81.5, fat: 0.3, serving: "100 جرام" },
    dried_goji_berries: { calories: 349, protein: 14.3, carbs: 77.1, fat: 0.7, serving: "100 جرام" },
    dried_mulberries: { calories: 340, protein: 9.2, carbs: 77.3, fat: 1.7, serving: "100 جرام" },
    dried_pineapple: { calories: 319, protein: 2.5, carbs: 82.7, fat: 0.4, serving: "100 جرام" },
    dried_papaya: { calories: 295, protein: 3.6, carbs: 74.1, fat: 0.5, serving: "100 جرام" },
    dried_peaches: { calories: 239, protein: 3.6, carbs: 61.3, fat: 0.8, serving: "100 جرام" },
    dried_apple_rings: { calories: 243, protein: 1.3, carbs: 65.9, fat: 0.3, serving: "100 جرام" },
    dried_pears: { calories: 262, protein: 2.3, carbs: 69.7, fat: 0.4, serving: "100 جرام" },
    dried_plums: { calories: 240, protein: 2.2, carbs: 63.9, fat: 0.4, serving: "100 جرام" },
    dried_kiwi: { calories: 316, protein: 4.4, carbs: 79.1, fat: 1.5, serving: "100 جرام" },
    dried_cantaloupe: { calories: 300, protein: 5.1, carbs: 73.2, fat: 0.6, serving: "100 جرام" },

    // الفواكه الاستوائية
    mango: { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, serving: "100 جرام" },
    papaya: { calories: 43, protein: 0.5, carbs: 11, fat: 0.3, serving: "100 جرام" },
    passion_fruit: { calories: 97, protein: 2.2, carbs: 23.4, fat: 0.7, serving: "100 جرام" },
    dragon_fruit: { calories: 60, protein: 1.2, carbs: 13, fat: 0.4, serving: "100 جرام" },
    lychee: { calories: 66, protein: 0.8, carbs: 16.5, fat: 0.4, serving: "100 جرام" },
    
    // الحمضيات
    orange: { calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, serving: "100 جرام" },
    mandarin: { calories: 53, protein: 0.8, carbs: 13.3, fat: 0.3, serving: "100 جرام" },
    grapefruit: { calories: 42, protein: 0.8, carbs: 10.7, fat: 0.1, serving: "100 جرام" },
    lime: { calories: 30, protein: 0.7, carbs: 10.5, fat: 0.2, serving: "100 جرام" },
    lemon: { calories: 29, protein: 1.1, carbs: 9.3, fat: 0.3, serving: "100 جرام" },
    
    // التوت
    strawberry: { calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, serving: "100 جرام" },
    blueberry: { calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3, serving: "100 جرام" },
    raspberry: { calories: 52, protein: 1.2, carbs: 11.9, fat: 0.7, serving: "100 جرام" },
    blackberry: { calories: 43, protein: 1.4, carbs: 9.6, fat: 0.5, serving: "100 جرام" },
    
    // فواكه موسمية
    watermelon: { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, serving: "100 جرام" },
    cantaloupe: { calories: 34, protein: 0.8, carbs: 8.2, fat: 0.2, serving: "100 جرام" },
    honeydew: { calories: 36, protein: 0.5, carbs: 9.1, fat: 0.1, serving: "100 جرام" },
    peach: { calories: 39, protein: 0.9, carbs: 9.5, fat: 0.3, serving: "100 جرام" },
    nectarine: { calories: 44, protein: 1.1, carbs: 10.6, fat: 0.3, serving: "100 جرام" },
    plum: { calories: 46, protein: 0.7, carbs: 11.4, fat: 0.3, serving: "100 جرام" },
    apricot: { calories: 48, protein: 1.4, carbs: 11.1, fat: 0.4, serving: "100 جرام" },

    // الزيوت والدهون الصحية
    olive_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    avocado: { calories: 160, protein: 2, carbs: 8.5, fat: 14.7, serving: "100 جرام" },
    almonds: { calories: 579, protein: 21, carbs: 22, fat: 49, serving: "100 جرام" },
    chia_seeds: { calories: 486, protein: 17, carbs: 42, fat: 31, serving: "100 جرام" },
    walnuts: { calories: 654, protein: 15, carbs: 14, fat: 65, serving: "100 جرام" },
    organic_olive_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    organic_coconut_oil: { calories: 862, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    organic_avocado_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    organic_flaxseed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    organic_sesame_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    organic_peanut_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    argan_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    almond_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    avocado_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    grapeseed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    walnut_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    peanut_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    flaxseed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    macadamia_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    rice_bran_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    black_seed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    mustard_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    hemp_seed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    rosehip_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    fish_oil: { calories: 902, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    grape_seed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    castor_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    tea_tree_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    jojoba_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    neem_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    evening_primrose_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    marula_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    baobab_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    moringa_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },

    // الزيوت
    vegetable_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    avocado_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    flaxseed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    safflower_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    eucalyptus_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    peppermint_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    lavender_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    bergamot_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    rosemary_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    thyme_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    sage_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    oregano_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    clove_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    cinnamon_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    nutmeg_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    cardamom_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    nutmeg_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    cardamom_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    fennel_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    anise_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    chamomile_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    frankincense_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    myrrh_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    sandalwood_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    jasmine_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    rose_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    neroli_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    ylang_ylang_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    geranium_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    vetiver_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    patchouli_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },

    // المكملات الغذائية
    whey_protein: { calories: 113, protein: 24, carbs: 2, fat: 1.5, serving: "30 جرام" },
    casein: { calories: 120, protein: 24, carbs: 3, fat: 1, serving: "30 جرام" },
    plant_protein: { calories: 110, protein: 20, carbs: 5, fat: 2, serving: "30 جرام" },

    // إضافة المزيد من الأطعمة
    smoked_chicken: { calories: 160, protein: 28, carbs: 0, fat: 5, serving: "100 جرام" },
    soy_protein: { calories: 335, protein: 88, carbs: 0, fat: 3.3, serving: "100 جرام" },
    almond_milk: { calories: 15, protein: 0.5, carbs: 0.3, fat: 1.1, serving: "100 مل" },
    soy_milk: { calories: 33, protein: 2.8, carbs: 3.3, fat: 1.8, serving: "100 مل" },
    beef_jerky: { calories: 410, protein: 33, carbs: 11, fat: 25, serving: "100 جرام" },
    peas: { calories: 81, protein: 5, carbs: 14, fat: 0.4, serving: "100 جرام" },
    red_beans: { calories: 127, protein: 8.7, carbs: 22.8, fat: 0.5, serving: "100 جرام" },
    pumpkin_seeds: { calories: 559, protein: 30, carbs: 10.7, fat: 49, serving: "100 جرام" },
    flax_seeds: { calories: 534, protein: 18, carbs: 29, fat: 42, serving: "100 جرام" },
    nuts: { calories: 607, protein: 21, carbs: 20, fat: 54, serving: "100 جرام" },
    peanut_butter: { calories: 588, protein: 25, carbs: 20, fat: 50, serving: "100 جرام" },
    almond_butter: { calories: 614, protein: 21, carbs: 19, fat: 56, serving: "100 جرام" },
    cashew_butter: { calories: 587, protein: 18.2, carbs: 27.6, fat: 49.2, serving: "100 جرام" },
    organic_tahini: { calories: 595, protein: 17.4, carbs: 21.2, fat: 53.8, serving: "100 جرام" },
    sunflower_seed_butter: { calories: 617, protein: 22.5, carbs: 18.6, fat: 55.2, serving: "100 جرام" },
    pistachio_butter: { calories: 589, protein: 20.2, carbs: 28.3, fat: 45.8, serving: "100 جرام" },
    walnut_butter: { calories: 654, protein: 15.2, carbs: 13.7, fat: 65.2, serving: "100 جرام" },
    pumpkin_seed_butter: { calories: 587, protein: 24.5, carbs: 17.8, fat: 49.4, serving: "100 جرام" },
    hazelnut_butter: { calories: 628, protein: 14.9, carbs: 16.7, fat: 60.8, serving: "100 جرام" },
    macadamia_butter: { calories: 718, protein: 8.2, carbs: 13.8, fat: 75.8, serving: "100 جرام" },
    pecan_butter: { calories: 698, protein: 9.2, carbs: 13.9, fat: 72.0, serving: "100 جرام" },
    canned_tuna: { calories: 116, protein: 26, carbs: 0, fat: 1, serving: "100 جرام" },
    white_beans: { calories: 139, protein: 9.7, carbs: 25, fat: 0.5, serving: "100 جرام" },
    frozen_shrimp: { calories: 99, protein: 24, carbs: 0.2, fat: 1.7, serving: "100 جرام" },
    duck_breast: { calories: 337, protein: 19, carbs: 0, fat: 28, serving: "100 جرام" },
    protein_yogurt: { calories: 80, protein: 15, carbs: 4, fat: 0.4, serving: "100 جرام" },
    quail_eggs: { calories: 158, protein: 13, carbs: 0.4, fat: 11, serving: "100 جرام" },
    beef_tenderloin: { calories: 267, protein: 26, carbs: 0, fat: 17, serving: "100 جرام" },
    squid: { calories: 92, protein: 15.6, carbs: 3, fat: 1.4, serving: "100 جرام" },
    brown_rice_protein: { calories: 107, protein: 22, carbs: 2.5, fat: 0.5, serving: "30 جرام" },
    bulgur: { calories: 342, protein: 12.3, carbs: 75.9, fat: 1.3, serving: "100 جرام" },
    couscous: { calories: 376, protein: 12.8, carbs: 77.4, fat: 0.6, serving: "100 جرام" },
    corn: { calories: 365, protein: 9.4, carbs: 74, fat: 4.7, serving: "100 جرام" },
    whole_pasta: { calories: 124, protein: 5.3, carbs: 25, fat: 0.9, serving: "100 جرام" },
    barley: { calories: 354, protein: 12.5, carbs: 73.5, fat: 2.3, serving: "100 جرام" },
    basmati_rice: { calories: 121, protein: 3.5, carbs: 25, fat: 0.5, serving: "100 جرام" },
    white_rice: { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, serving: "100 جرام" },
    black_rice: { calories: 356, protein: 8.9, carbs: 76, fat: 3.3, serving: "100 جرام" },
    brown_bread: { calories: 259, protein: 9, carbs: 49, fat: 3.3, serving: "100 جرام" },
    oat_bread: { calories: 236, protein: 8.4, carbs: 44, fat: 3.9, serving: "100 جرام" },
    mixed_grain_bread: { calories: 265, protein: 13, carbs: 43, fat: 4.2, serving: "100 جرام" },
    french_bread: { calories: 274, protein: 9, carbs: 51, fat: 3.1, serving: "100 جرام" },
    yellow_pasta: { calories: 371, protein: 13, carbs: 75, fat: 1.5, serving: "100 جرام" },
    whole_wheat_pasta: { calories: 124, protein: 5.3, carbs: 25, fat: 0.9, serving: "100 جرام" },
    whole_tortilla: { calories: 237, protein: 7, carbs: 40, fat: 5.9, serving: "100 جرام" },
    rice_noodles: { calories: 364, protein: 6, carbs: 80, fat: 0.6, serving: "100 جرام" },
    whole_couscous: { calories: 376, protein: 12.8, carbs: 77.4, fat: 0.6, serving: "100 جرام" },
    whole_vermicelli: { calories: 384, protein: 14.5, carbs: 71, fat: 4.1, serving: "100 جرام" },
    potato: { calories: 77, protein: 2, carbs: 17, fat: 0.1, serving: "100 جرام" },
    whole_grains: { calories: 340, protein: 13.7, carbs: 72, fat: 2.5, serving: "100 جرام" },
    oat_flakes: { calories: 389, protein: 16.9, carbs: 66, fat: 6.9, serving: "100 جرام" },
    berries: { calories: 57, protein: 0.7, carbs: 14, fat: 0.3, serving: "100 جرام" },
    gluten_free_grains: { calories: 364, protein: 7.5, carbs: 80, fat: 0.7, serving: "100 جرام" },
    pumpkin_couscous: { calories: 157, protein: 5.5, carbs: 32, fat: 0.6, serving: "100 جرام" },
    dried_figs: { calories: 249, protein: 3.3, carbs: 64, fat: 0.9, serving: "100 جرام" },
    cranberry: { calories: 46, protein: 0.4, carbs: 12, fat: 0.1, serving: "100 جرام" },
    pear: { calories: 57, protein: 0.4, carbs: 15, fat: 0.1, serving: "100 جرام" },
    kiwi: { calories: 61, protein: 1.1, carbs: 15, fat: 0.5, serving: "100 جرام" },
    dried_fruits: { calories: 359, protein: 3.7, carbs: 89, fat: 0.5, serving: "100 جرام" },
    pineapple: { calories: 50, protein: 0.5, carbs: 13, fat: 0.1, serving: "100 جرام" },
    frozen_fruits: { calories: 55, protein: 0.8, carbs: 14, fat: 0.2, serving: "100 جرام" },
    cooked_brown_rice: { calories: 111, protein: 2.6, carbs: 23, fat: 0.9, serving: "100 جرام" },
    purple_potato: { calories: 70, protein: 2, carbs: 16, fat: 0.1, serving: "100 جرام" },
    watermelon: { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, serving: "100 جرام" },
    sour_lemon: { calories: 29, protein: 1.1, carbs: 9, fat: 0.3, serving: "100 جرام" },
    dried_kiwi: { calories: 316, protein: 4.4, carbs: 79, fat: 1.5, serving: "100 جرام" },
    frozen_mango: { calories: 60, protein: 0.8, carbs: 15, fat: 0.3, serving: "100 جرام" },
    organic_apple: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, serving: "100 جرام" },
    pistachios: { calories: 562, protein: 20, carbs: 28, fat: 45, serving: "100 جرام" },
    mixed_nuts_premium: { calories: 607, protein: 21, carbs: 20, fat: 54, serving: "100 جرام" },
    arugula_seeds: { calories: 541, protein: 23, carbs: 29, fat: 42, serving: "100 جرام" },
    rosehip_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    hemp_butter: { calories: 619, protein: 30, carbs: 4.7, fat: 53, serving: "100 جرام" },
    beans: { calories: 347, protein: 21, carbs: 63, fat: 1.2, serving: "100 جرام" },
    pomegranate: { calories: 83, protein: 1.7, carbs: 19, fat: 1.2, serving: "100 جرام" },
    dates: { calories: 282, protein: 2.5, carbs: 75, fat: 0.4, serving: "100 جرام" },
    dried_apricots: { calories: 241, protein: 3.4, carbs: 63, fat: 0.5, serving: "100 جرام" },
    raisins: { calories: 299, protein: 3.1, carbs: 79, fat: 0.5, serving: "100 جرام" },
    prunes: { calories: 240, protein: 2.2, carbs: 63, fat: 0.4, serving: "100 جرام" },
    mango: { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, serving: "100 جرام" },
    papaya: { calories: 43, protein: 0.5, carbs: 11, fat: 0.3, serving: "100 جرام" },
    guava: { calories: 68, protein: 2.6, carbs: 14, fat: 1, serving: "100 جرام" },
    passion_fruit: { calories: 97, protein: 2.2, carbs: 23, fat: 0.7, serving: "100 جرام" },
    dragon_fruit: { calories: 60, protein: 1.2, carbs: 13, fat: 0.4, serving: "100 جرام" },
    lychee: { calories: 66, protein: 0.8, carbs: 17, fat: 0.4, serving: "100 جرام" },
    coconut: { calories: 354, protein: 3.3, carbs: 15, fat: 33, serving: "100 جرام" },
    dried_dates: { calories: 282, protein: 2.5, carbs: 75, fat: 0.4, serving: "100 جرام" },
    mulberry: { calories: 43, protein: 1.4, carbs: 10, fat: 0.4, serving: "100 جرام" },
    goji_berries: { calories: 349, protein: 14, carbs: 77, fat: 0.7, serving: "100 جرام" },
    fresh_figs: { calories: 74, protein: 0.8, carbs: 19, fat: 0.3, serving: "100 جرام" },
    persimmon: { calories: 70, protein: 0.6, carbs: 19, fat: 0.2, serving: "100 جرام" },
    jackfruit: { calories: 95, protein: 1.7, carbs: 23, fat: 0.6, serving: "100 جرام" },
    soursop: { calories: 66, protein: 1, carbs: 17, fat: 0.3, serving: "100 جرام" },
    custard_apple: { calories: 101, protein: 1.7, carbs: 25, fat: 0.6, serving: "100 جرام" },
    star_fruit: { calories: 31, protein: 1, carbs: 7, fat: 0.3, serving: "100 جرام" },
    kumquat: { calories: 71, protein: 1.9, carbs: 16, fat: 0.9, serving: "100 جرام" },
    longan: { calories: 60, protein: 1.3, carbs: 15, fat: 0.1, serving: "100 جرام" },
    rambutan: { calories: 82, protein: 0.9, carbs: 21, fat: 0.2, serving: "100 جرام" },
    durian: { calories: 147, protein: 1.5, carbs: 27, fat: 5.3, serving: "100 جرام" },
    tamarind: { calories: 239, protein: 2.8, carbs: 63, fat: 0.6, serving: "100 جرام" },
    acai_berry: { calories: 70, protein: 1, carbs: 4, fat: 5, serving: "100 جرام" },
    noni_fruit: { calories: 44, protein: 0.5, carbs: 11, fat: 0.3, serving: "100 جرام" },
    mangosteen: { calories: 63, protein: 0.5, carbs: 15, fat: 0.6, serving: "100 جرام" },
    breadfruit: { calories: 103, protein: 1.1, carbs: 27, fat: 0.2, serving: "100 جرام" },
    sapodilla: { calories: 83, protein: 0.4, carbs: 20, fat: 1.1, serving: "100 جرام" },
    jujube: { calories: 79, protein: 1.2, carbs: 20, fat: 0.2, serving: "100 جرام" },
    miracle_fruit: { calories: 94, protein: 0.9, carbs: 24, fat: 0.3, serving: "100 جرام" },
    ambarella: { calories: 41, protein: 0.5, carbs: 10, fat: 0.3, serving: "100 جرام" },
    salak: { calories: 77, protein: 0.8, carbs: 19, fat: 0.4, serving: "100 جرام" },
    jabuticaba: { calories: 58, protein: 0.6, carbs: 15, fat: 0.2, serving: "100 جرام" },
    cempedak: { calories: 116, protein: 3, carbs: 28, fat: 0.4, serving: "100 جرام" },
    santol: { calories: 86, protein: 0.9, carbs: 22, fat: 0.3, serving: "100 جرام" },
    rose_apple: { calories: 25, protein: 0.6, carbs: 6, fat: 0.3, serving: "100 جرام" },
    sugar_apple: { calories: 94, protein: 2.1, carbs: 24, fat: 0.3, serving: "100 جرام" },
    feijoa: { calories: 55, protein: 0.7, carbs: 13, fat: 0.4, serving: "100 جرام" },
    black_sapote: { calories: 134, protein: 2, carbs: 34, fat: 0.4, serving: "100 جرام" },
    mamey_sapote: { calories: 124, protein: 1.7, carbs: 32, fat: 0.5, serving: "100 جرام" },
    canistel: { calories: 138, protein: 2.5, carbs: 35, fat: 0.6, serving: "100 جرام" },
    horned_melon: { calories: 44, protein: 1.8, carbs: 7.6, fat: 1.3, serving: "100 جرام" },
    monstera_deliciosa: { calories: 92, protein: 1.6, carbs: 22, fat: 0.3, serving: "100 جرام" },
    pitaya: { calories: 60, protein: 1.2, carbs: 13, fat: 0.4, serving: "100 جرام" },
    african_horned_cucumber: { calories: 44, protein: 1.8, carbs: 7.6, fat: 1.3, serving: "100 جرام" },
    cupuacu: { calories: 101, protein: 1.2, carbs: 25, fat: 0.5, serving: "100 جرام" },
    marula_fruit: { calories: 180, protein: 0.5, carbs: 47, fat: 0.5, serving: "100 جرام" },
    baobab_fruit: { calories: 170, protein: 2.5, carbs: 75, fat: 0.2, serving: "100 جرام" },
    caja: { calories: 46, protein: 0.8, carbs: 11, fat: 0.3, serving: "100 جرام" },
    umbu: { calories: 37, protein: 0.6, carbs: 9, fat: 0.2, serving: "100 جرام" },
    bacuri: { calories: 111, protein: 1.5, carbs: 28, fat: 0.4, serving: "100 جرام" },
    biriba: { calories: 94, protein: 1.7, carbs: 24, fat: 0.3, serving: "100 جرام" },
    camu_camu: { calories: 20, protein: 0.5, carbs: 4.7, fat: 0.2, serving: "100 جرام" },

    // الزيوت
    olive_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    sesame_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    sunflower_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    corn_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    canola_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    palm_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    coconut_oil: { calories: 862, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    argan_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    almond_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    avocado_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    grapeseed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    walnut_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    peanut_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    flaxseed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    macadamia_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    rice_bran_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    black_seed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    mustard_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    hemp_seed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    rosehip_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    fish_oil: { calories: 902, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    grape_seed_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    castor_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    tea_tree_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    jojoba_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    neem_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    evening_primrose_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    marula_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    baobab_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },
    moringa_oil: { calories: 884, protein: 0, carbs: 0, fat: 100, serving: "100 مل" },

    // الأطباق العربية التقليدية
    mansaf: { calories: 750, protein: 45, carbs: 65, fat: 35, serving: "100 جرام" },
    mandi: { calories: 380, protein: 25, carbs: 45, fat: 15, serving: "100 جرام" },
    maqluba: { calories: 320, protein: 15, carbs: 42, fat: 12, serving: "100 جرام" },
    kabsa: { calories: 350, protein: 20, carbs: 48, fat: 14, serving: "100 جرام" },
    shawarma_chicken: { calories: 250, protein: 28, carbs: 15, fat: 12, serving: "100 جرام" },
    shawarma_meat: { calories: 320, protein: 30, carbs: 12, fat: 18, serving: "100 جرام" },
    falafel: { calories: 333, protein: 13.3, carbs: 31.8, fat: 17.8, serving: "100 جرام" },
    hummus: { calories: 166, protein: 7.9, carbs: 14.3, fat: 9.6, serving: "100 جرام" },
    tabbouleh: { calories: 257, protein: 8.2, carbs: 42.3, fat: 7.6, serving: "100 جرام" },
    fattoush: { calories: 151, protein: 3.2, carbs: 18.4, fat: 8.1, serving: "100 جرام" },
    
    // الحلويات العربية
    kunafa: { calories: 456, protein: 8.5, carbs: 62, fat: 22, serving: "100 جرام" },
    baklava: { calories: 430, protein: 7.2, carbs: 58, fat: 20, serving: "100 جرام" },
    qatayef: { calories: 310, protein: 7.5, carbs: 48, fat: 12, serving: "100 جرام" },
    maamoul: { calories: 380, protein: 5.2, carbs: 52, fat: 18, serving: "100 جرام" },
    halawet_el_jibn: { calories: 355, protein: 9.5, carbs: 45, fat: 16, serving: "100 جرام" },
    basbousa: { calories: 395, protein: 6.2, carbs: 58, fat: 15, serving: "100 جرام" },
    luqmat_al_qadi: { calories: 345, protein: 4.8, carbs: 50, fat: 14, serving: "100 جرام" },
    umm_ali: { calories: 330, protein: 8.2, carbs: 42, fat: 15, serving: "100 جرام" },
    rice_pudding: { calories: 145, protein: 3.5, carbs: 28, fat: 2.5, serving: "100 جرام" },
    
    // المقبلات العربية
    mutabbal: { calories: 170, protein: 2.5, carbs: 8, fat: 15, serving: "100 جرام" },
    baba_ganoush: { calories: 160, protein: 2.3, carbs: 9, fat: 13, serving: "100 جرام" },
    tabbouleh: { calories: 257, protein: 8.2, carbs: 42.3, fat: 7.6, serving: "100 جرام" },
    fattoush: { calories: 151, protein: 3.2, carbs: 18.4, fat: 8.1, serving: "100 جرام" },
    shanklish: { calories: 350, protein: 22.5, carbs: 3.8, fat: 28.2, serving: "100 جرام" },
    warak_enab: { calories: 178, protein: 4.2, carbs: 32.5, fat: 3.8, serving: "100 جرام" },
    makdous: { calories: 185, protein: 3.8, carbs: 12.4, fat: 14.6, serving: "100 جرام" },
};

function updateNutritionValues(calories, protein, carbs, fat) {
    // تحديث القيم في العناصر
    document.getElementById('caloriesValue').textContent = calories.toFixed(1);
    document.getElementById('proteinValue').textContent = protein.toFixed(1);
    document.getElementById('carbsValue').textContent = carbs.toFixed(1);
    document.getElementById('fatValue').textContent = fat.toFixed(1);

    // تحديث نسب الامتلاء
    const maxValues = {
        calories: 2500,
        protein: 200,
        carbs: 300,
        fat: 100
    };

    // تحديث الدوائر
    const circles = document.querySelectorAll('.result-item');
    const values = [calories, protein, carbs, fat];
    const maxVals = [maxValues.calories, maxValues.protein, maxValues.carbs, maxValues.fat];

    circles.forEach((circle, index) => {
        if (values[index] > 0) {
            const percentage = (values[index] / maxVals[index]) * 100;
            circle.style.setProperty('--fill-percentage', `${Math.min(percentage, 100)}%`);
            circle.classList.add('has-value');
        } else {
            circle.style.setProperty('--fill-percentage', '0%');
            circle.classList.remove('has-value');
        }
    });
}

function calculateNutrition() {
    const foodSelect = document.getElementById('foodSelect');
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const selectedFood = foodSelect.value;

    if (!selectedFood || !quantity || quantity <= 0) {
        updateNutritionValues(0, 0, 0, 0);
        return;
    }

    if (foodDatabase[selectedFood]) {
        const food = foodDatabase[selectedFood];
        const calories = (food.calories * quantity) / 100;
        const protein = (food.protein * quantity) / 100;
        const carbs = (food.carbs * quantity) / 100;
        const fat = (food.fat * quantity) / 100;

        updateNutritionValues(calories, protein, carbs, fat);
    } else {
        updateNutritionValues(0, 0, 0, 0);
    }
}

// إضافة مستمع حدث للزر فقط
document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateNutrition);
    }

    // تهيئة القيم الأولية
    updateNutritionValues(0, 0, 0, 0);
});

// تفعيل الأسئلة الشائعة
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // إغلاق جميع الأسئلة الأخرى
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // تبديل حالة السؤال الحالي
            item.classList.toggle('active');
        });
    });
});

// وظيفة البحث وتحديد نوع الطعام تلقائياً
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('foodSearch').value.trim().toLowerCase();
    const foodSelect = document.getElementById('foodSelect');
    const options = foodSelect.options;

    // البحث عن الطعام في القائمة
    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].text.toLowerCase();
        if (optionText.includes(searchTerm)) {
            foodSelect.selectedIndex = i;
            return;
        }
    }
    
    // إذا لم يتم العثور على الطعام
    updateNutritionValues(0, 0, 0, 0);
});

// إضافة مستمع حدث للبحث عند الضغط على Enter
document.getElementById('foodSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});
