// core/ApiError.ts
var ApiError = class extends Error {
  url;
  status;
  statusText;
  body;
  request;
  constructor(request2, response, message) {
    super(message);
    this.name = "ApiError";
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request2;
  }
};

// core/CancelablePromise.ts
var CancelError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CancelError";
  }
  get isCancelled() {
    return true;
  }
};
var CancelablePromise = class {
  #isResolved;
  #isRejected;
  #isCancelled;
  #cancelHandlers;
  #promise;
  #resolve;
  #reject;
  constructor(executor) {
    this.#isResolved = false;
    this.#isRejected = false;
    this.#isCancelled = false;
    this.#cancelHandlers = [];
    this.#promise = new Promise((resolve2, reject) => {
      this.#resolve = resolve2;
      this.#reject = reject;
      const onResolve = (value) => {
        if (this.#isResolved || this.#isRejected || this.#isCancelled) {
          return;
        }
        this.#isResolved = true;
        if (this.#resolve) this.#resolve(value);
      };
      const onReject = (reason) => {
        if (this.#isResolved || this.#isRejected || this.#isCancelled) {
          return;
        }
        this.#isRejected = true;
        if (this.#reject) this.#reject(reason);
      };
      const onCancel = (cancelHandler) => {
        if (this.#isResolved || this.#isRejected || this.#isCancelled) {
          return;
        }
        this.#cancelHandlers.push(cancelHandler);
      };
      Object.defineProperty(onCancel, "isResolved", {
        get: () => this.#isResolved
      });
      Object.defineProperty(onCancel, "isRejected", {
        get: () => this.#isRejected
      });
      Object.defineProperty(onCancel, "isCancelled", {
        get: () => this.#isCancelled
      });
      return executor(onResolve, onReject, onCancel);
    });
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(onFulfilled, onRejected) {
    return this.#promise.then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this.#promise.catch(onRejected);
  }
  finally(onFinally) {
    return this.#promise.finally(onFinally);
  }
  cancel() {
    if (this.#isResolved || this.#isRejected || this.#isCancelled) {
      return;
    }
    this.#isCancelled = true;
    if (this.#cancelHandlers.length) {
      try {
        for (const cancelHandler of this.#cancelHandlers) {
          cancelHandler();
        }
      } catch (error) {
        console.warn("Cancellation threw an error", error);
        return;
      }
    }
    this.#cancelHandlers.length = 0;
    if (this.#reject) this.#reject(new CancelError("Request aborted"));
  }
  get isCancelled() {
    return this.#isCancelled;
  }
};

// core/OpenAPI.ts
var OpenAPI = {
  BASE: "https://app.rightgun.uk/portal/api/v1/integration",
  VERSION: "1.0.0",
  WITH_CREDENTIALS: false,
  CREDENTIALS: "include",
  TOKEN: void 0,
  USERNAME: void 0,
  PASSWORD: void 0,
  HEADERS: void 0,
  ENCODE_PATH: void 0
};

// models/calibre.ts
var calibre;
((calibre2) => {
  let type;
  ((type2) => {
    type2["RIFLE"] = "Rifle";
    type2["SHOTGUN"] = "Shotgun";
    type2["AIRGUN"] = "Airgun";
  })(type = calibre2.type || (calibre2.type = {}));
})(calibre || (calibre = {}));

// models/catalogue.ts
var catalogue;
((catalogue2) => {
  let category;
  ((category2) => {
    category2["AIR_GUNS"] = "Air guns";
    category2["AMMUNITION"] = "Ammunition";
    category2["ARCHERY"] = "Archery";
    category2["ART_COLLECTIBLES"] = "Art & Collectibles";
    category2["CLAY"] = "Clay";
    category2["CLOTHING"] = "Clothing";
    category2["DOGS"] = "Dogs";
    category2["GUN_ACCESSORIES"] = "Gun accessories";
    category2["HANDGUNS"] = "Handguns";
    category2["HUNTING"] = "Hunting";
    category2["KNIVES"] = "Knives";
    category2["MODERATOR"] = "Moderator";
    category2["RIFLE"] = "Rifle";
    category2["SAFES_CABINETS"] = "Safes & Cabinets";
    category2["SHOTGUN"] = "Shotgun";
    category2["SIGHTS_OPTICS"] = "Sights & Optics";
    category2["THERMAL"] = "Thermal";
    category2["VEHICLE"] = "Vehicle";
  })(category = catalogue2.category || (catalogue2.category = {}));
})(catalogue || (catalogue = {}));

// models/firearm.ts
var firearm;
((firearm2) => {
  let grade;
  ((grade2) => {
    grade2[grade2["_1"] = 1] = "_1";
    grade2[grade2["_2"] = 2] = "_2";
    grade2[grade2["_3"] = 3] = "_3";
    grade2[grade2["_4"] = 4] = "_4";
    grade2[grade2["_5"] = 5] = "_5";
    grade2[grade2["_6"] = 6] = "_6";
    grade2[grade2["_7"] = 7] = "_7";
    grade2[grade2["_8"] = 8] = "_8";
  })(grade = firearm2.grade || (firearm2.grade = {}));
  let origin;
  ((origin2) => {
    origin2["AUSTRIA"] = "Austria";
    origin2["BELGIUM"] = "Belgium";
    origin2["BRAZIL"] = "Brazil";
    origin2["CHINA"] = "China";
    origin2["CZECHIA"] = "Czechia";
    origin2["FINLAND"] = "Finland";
    origin2["FRANCE"] = "France";
    origin2["GERMANY"] = "Germany";
    origin2["ITALY"] = "Italy";
    origin2["JAPAN"] = "Japan";
    origin2["RUSSIA"] = "Russia";
    origin2["SLOVAKIA"] = "Slovakia";
    origin2["SPAIN"] = "Spain";
    origin2["TURKEY"] = "Turkey";
    origin2["UNKNOWN"] = "Unknown";
    origin2["USA"] = "USA";
    origin2["UK"] = "UK";
  })(origin = firearm2.origin || (firearm2.origin = {}));
  let orientation;
  ((orientation2) => {
    orientation2["LEFT_HANDED"] = "Left Handed";
    orientation2["AMBIDEXTROUS"] = "Ambidextrous";
    orientation2["CENTRE_VISION"] = "Centre Vision";
    orientation2["RIGHT_HANDED"] = "Right Handed";
    orientation2["X_OVER"] = "X-Over";
    orientation2["UNIVERSAL"] = "Universal";
  })(orientation = firearm2.orientation || (firearm2.orientation = {}));
  let barrelUnit;
  ((barrelUnit2) => {
    barrelUnit2["INCH"] = "Inch";
    barrelUnit2["CENTIMETERS"] = "Centimeters";
  })(barrelUnit = firearm2.barrelUnit || (firearm2.barrelUnit = {}));
  let stocklUnit;
  ((stocklUnit2) => {
    stocklUnit2["INCH"] = "Inch";
    stocklUnit2["CENTIMETERS"] = "Centimeters";
  })(stocklUnit = firearm2.stocklUnit || (firearm2.stocklUnit = {}));
  let weightUnit;
  ((weightUnit2) => {
    weightUnit2["POUNDS_OZ"] = "Pounds-Oz";
    weightUnit2["KG_G"] = "Kg-g";
  })(weightUnit = firearm2.weightUnit || (firearm2.weightUnit = {}));
  let typeOfLicence2;
  ((typeOfLicence3) => {
    typeOfLicence3["AIRGUN"] = "Airgun";
    typeOfLicence3["FIREARM"] = "Firearm";
    typeOfLicence3["PROHIBITED_WEAPONS_AND_AMMUNITION"] = "Prohibited weapons and ammunition";
    typeOfLicence3["REGISTERED_FIREARMS_DEALER_RFD_"] = "Registered Firearms Dealer (RFD)";
    typeOfLicence3["SHOTGUN"] = "Shotgun";
    typeOfLicence3["TEMPORARY_PERMIT"] = "Temporary permit";
    typeOfLicence3["NO_LICENCE"] = "No Licence";
  })(typeOfLicence2 = firearm2.typeOfLicence || (firearm2.typeOfLicence = {}));
  let type;
  ((type2) => {
    type2["RIFLE"] = "Rifle";
    type2["SHOTGUN"] = "Shotgun";
    type2["AIRGUN"] = "Airgun";
  })(type = firearm2.type || (firearm2.type = {}));
  let trigger;
  ((trigger2) => {
    trigger2["SINGLE"] = "single";
    trigger2["DOUBLE"] = "double";
  })(trigger = firearm2.trigger || (firearm2.trigger = {}));
  let ejector;
  ((ejector2) => {
    ejector2["YES"] = "yes";
    ejector2["NO"] = "no";
  })(ejector = firearm2.ejector || (firearm2.ejector = {}));
  let choke;
  ((choke3) => {
    choke3["FIXED"] = "Fixed";
    choke3["MULTI"] = "multi";
  })(choke = firearm2.choke || (firearm2.choke = {}));
  let choke1;
  ((choke12) => {
    choke12["_1_1_FULL"] = "1/1 Full";
    choke12["_1_2_MODIFIED"] = "1/2 Modified";
    choke12["_1_4_IMPROVED_CYLINDER"] = "1/4 Improved  Cylinder";
    choke12["_1_8_SKEET"] = "1/8 Skeet";
    choke12["_3_4_IMPROVED_MODIFIED"] = "3/4 Improved Modified";
    choke12["_3_8_LIGHT_MODIFIED"] = "3/8 light Modified";
    choke12["_5_8_LIGHT_IMPROVED_MODIFIED"] = "5/8 Light Improved Modified";
    choke12["_7_8_LIGHT_FULL"] = "7/8 Light full";
    choke12["ATA"] = "ATA";
    choke12["BAILEY_INVECTOR_PLUS"] = "Bailey Invector Plus";
    choke12["BERETTA_MOBILCHOKE"] = "Beretta Mobilchoke";
    choke12["BERETTA_OPTIMA"] = "Beretta Optima";
    choke12["BROWNING_INVECTOR_DS"] = "Browning Invector DS";
    choke12["BROWNING_INVECTOR_PLUS"] = "Browning Invector Plus";
    choke12["CYLINDER_NO_CHOKE_"] = "Cylinder (no choke)";
    choke12["EXTRA_FULL"] = "Extra Full";
    choke12["NAPIER"] = "Napier";
    choke12["OPTIMA_HP"] = "Optima HP";
    choke12["SUPER_CYLINDER"] = "Super Cylinder";
    choke12["TEAGUE_INVECTOR_DS"] = "Teague Invector DS";
    choke12["TEAGUE_INVECTOR_PLUS"] = "Teague Invector Plus";
    choke12["TEAGUE_MOBILCHOKE"] = "Teague Mobilchoke";
    choke12["TEAGUE_OPTIMA"] = "Teague Optima";
    choke12["TEAGUE_RIZZINI_LONG"] = "Teague Rizzini Long";
    choke12["TEAGUE_RIZZINI_SHORT"] = "Teague Rizzini Short";
    choke12["TEAGUE_RIZZINI_TYPE_C"] = "Teague Rizzini Type C";
    choke12["TURKEY"] = "Turkey";
    choke12["TWIST_RATE_10"] = "Twist Rate 10";
    choke12["TWIST_RATE_12"] = "Twist Rate 12";
  })(choke1 = firearm2.choke1 || (firearm2.choke1 = {}));
  let choke2;
  ((choke22) => {
    choke22["_1_1_FULL"] = "1/1 Full";
    choke22["_1_2_MODIFIED"] = "1/2 Modified";
    choke22["_1_4_IMPROVED_CYLINDER"] = "1/4 Improved  Cylinder";
    choke22["_1_8_SKEET"] = "1/8 Skeet";
    choke22["_3_4_IMPROVED_MODIFIED"] = "3/4 Improved Modified";
    choke22["_3_8_LIGHT_MODIFIED"] = "3/8 light Modified";
    choke22["_5_8_LIGHT_IMPROVED_MODIFIED"] = "5/8 Light Improved Modified";
    choke22["_7_8_LIGHT_FULL"] = "7/8 Light full";
    choke22["ATA"] = "ATA";
    choke22["BAILEY_INVECTOR_PLUS"] = "Bailey Invector Plus";
    choke22["BERETTA_MOBILCHOKE"] = "Beretta Mobilchoke";
    choke22["BERETTA_OPTIMA"] = "Beretta Optima";
    choke22["BROWNING_INVECTOR_DS"] = "Browning Invector DS";
    choke22["BROWNING_INVECTOR_PLUS"] = "Browning Invector Plus";
    choke22["CYLINDER_NO_CHOKE_"] = "Cylinder (no choke)";
    choke22["EXTRA_FULL"] = "Extra Full";
    choke22["NAPIER"] = "Napier";
    choke22["OPTIMA_HP"] = "Optima HP";
    choke22["SUPER_CYLINDER"] = "Super Cylinder";
    choke22["TEAGUE_INVECTOR_DS"] = "Teague Invector DS";
    choke22["TEAGUE_INVECTOR_PLUS"] = "Teague Invector Plus";
    choke22["TEAGUE_MOBILCHOKE"] = "Teague Mobilchoke";
    choke22["TEAGUE_OPTIMA"] = "Teague Optima";
    choke22["TEAGUE_RIZZINI_LONG"] = "Teague Rizzini Long";
    choke22["TEAGUE_RIZZINI_SHORT"] = "Teague Rizzini Short";
    choke22["TEAGUE_RIZZINI_TYPE_C"] = "Teague Rizzini Type C";
    choke22["TURKEY"] = "Turkey";
    choke22["TWIST_RATE_10"] = "Twist Rate 10";
    choke22["TWIST_RATE_12"] = "Twist Rate 12";
  })(choke2 = firearm2.choke2 || (firearm2.choke2 = {}));
})(firearm || (firearm = {}));

// models/item.ts
var item;
((item2) => {
  let category;
  ((category2) => {
    category2["AIR_GUNS"] = "Air guns";
    category2["AMMUNITION"] = "Ammunition";
    category2["ARCHERY"] = "Archery";
    category2["ART_COLLECTIBLES"] = "Art & Collectibles";
    category2["CLAY"] = "Clay";
    category2["CLOTHING"] = "Clothing";
    category2["DOGS"] = "Dogs";
    category2["GUN_ACCESSORIES"] = "Gun accessories";
    category2["HANDGUNS"] = "Handguns";
    category2["HUNTING"] = "Hunting";
    category2["KNIVES"] = "Knives";
    category2["MODERATOR"] = "Moderator";
    category2["RIFLE"] = "Rifle";
    category2["SAFES_CABINETS"] = "Safes & Cabinets";
    category2["SHOTGUN"] = "Shotgun";
    category2["SIGHTS_OPTICS"] = "Sights & Optics";
    category2["THERMAL"] = "Thermal";
    category2["VEHICLE"] = "Vehicle";
  })(category = item2.category || (item2.category = {}));
  let grade;
  ((grade2) => {
    grade2[grade2["_1"] = 1] = "_1";
    grade2[grade2["_2"] = 2] = "_2";
    grade2[grade2["_3"] = 3] = "_3";
    grade2[grade2["_4"] = 4] = "_4";
    grade2[grade2["_5"] = 5] = "_5";
    grade2[grade2["_6"] = 6] = "_6";
    grade2[grade2["_7"] = 7] = "_7";
    grade2[grade2["_8"] = 8] = "_8";
  })(grade = item2.grade || (item2.grade = {}));
  let origin;
  ((origin2) => {
    origin2["AUSTRIA"] = "Austria";
    origin2["BELGIUM"] = "Belgium";
    origin2["BRAZIL"] = "Brazil";
    origin2["CHINA"] = "China";
    origin2["CZECHIA"] = "Czechia";
    origin2["FINLAND"] = "Finland";
    origin2["FRANCE"] = "France";
    origin2["GERMANY"] = "Germany";
    origin2["ITALY"] = "Italy";
    origin2["JAPAN"] = "Japan";
    origin2["RUSSIA"] = "Russia";
    origin2["SLOVAKIA"] = "Slovakia";
    origin2["SPAIN"] = "Spain";
    origin2["TURKEY"] = "Turkey";
    origin2["UNKNOWN"] = "Unknown";
    origin2["USA"] = "USA";
    origin2["UK"] = "UK";
  })(origin = item2.origin || (item2.origin = {}));
  let orientation;
  ((orientation2) => {
    orientation2["LEFT_HANDED"] = "Left Handed";
    orientation2["AMBIDEXTROUS"] = "Ambidextrous";
    orientation2["CENTRE_VISION"] = "Centre Vision";
    orientation2["RIGHT_HANDED"] = "Right Handed";
    orientation2["X_OVER"] = "X-Over";
    orientation2["UNIVERSAL"] = "Universal";
  })(orientation = item2.orientation || (item2.orientation = {}));
  let barrelUnit;
  ((barrelUnit2) => {
    barrelUnit2["INCH"] = "Inch";
    barrelUnit2["CENTIMETERS"] = "Centimeters";
  })(barrelUnit = item2.barrelUnit || (item2.barrelUnit = {}));
  let stocklUnit;
  ((stocklUnit2) => {
    stocklUnit2["INCH"] = "Inch";
    stocklUnit2["CENTIMETERS"] = "Centimeters";
  })(stocklUnit = item2.stocklUnit || (item2.stocklUnit = {}));
  let weightUnit;
  ((weightUnit2) => {
    weightUnit2["POUNDS_OZ"] = "Pounds-Oz";
    weightUnit2["KG_G"] = "Kg-g";
  })(weightUnit = item2.weightUnit || (item2.weightUnit = {}));
  let typeOfLicence2;
  ((typeOfLicence3) => {
    typeOfLicence3["AIRGUN"] = "Airgun";
    typeOfLicence3["FIREARM"] = "Firearm";
    typeOfLicence3["PROHIBITED_WEAPONS_AND_AMMUNITION"] = "Prohibited weapons and ammunition";
    typeOfLicence3["REGISTERED_FIREARMS_DEALER_RFD_"] = "Registered Firearms Dealer (RFD)";
    typeOfLicence3["SHOTGUN"] = "Shotgun";
    typeOfLicence3["TEMPORARY_PERMIT"] = "Temporary permit";
    typeOfLicence3["NO_LICENCE"] = "No Licence";
  })(typeOfLicence2 = item2.typeOfLicence || (item2.typeOfLicence = {}));
  let type;
  ((type2) => {
    type2["RIFLE"] = "Rifle";
    type2["SHOTGUN"] = "Shotgun";
    type2["AIRGUN"] = "Airgun";
  })(type = item2.type || (item2.type = {}));
  let trigger;
  ((trigger2) => {
    trigger2["SINGLE"] = "single";
    trigger2["DOUBLE"] = "double";
  })(trigger = item2.trigger || (item2.trigger = {}));
  let ejector;
  ((ejector2) => {
    ejector2["YES"] = "yes";
    ejector2["NO"] = "no";
  })(ejector = item2.ejector || (item2.ejector = {}));
  let choke;
  ((choke3) => {
    choke3["FIXED"] = "Fixed";
    choke3["MULTI"] = "multi";
  })(choke = item2.choke || (item2.choke = {}));
  let choke1;
  ((choke12) => {
    choke12["_1_1_FULL"] = "1/1 Full";
    choke12["_1_2_MODIFIED"] = "1/2 Modified";
    choke12["_1_4_IMPROVED_CYLINDER"] = "1/4 Improved  Cylinder";
    choke12["_1_8_SKEET"] = "1/8 Skeet";
    choke12["_3_4_IMPROVED_MODIFIED"] = "3/4 Improved Modified";
    choke12["_3_8_LIGHT_MODIFIED"] = "3/8 light Modified";
    choke12["_5_8_LIGHT_IMPROVED_MODIFIED"] = "5/8 Light Improved Modified";
    choke12["_7_8_LIGHT_FULL"] = "7/8 Light full";
    choke12["ATA"] = "ATA";
    choke12["BAILEY_INVECTOR_PLUS"] = "Bailey Invector Plus";
    choke12["BERETTA_MOBILCHOKE"] = "Beretta Mobilchoke";
    choke12["BERETTA_OPTIMA"] = "Beretta Optima";
    choke12["BROWNING_INVECTOR_DS"] = "Browning Invector DS";
    choke12["BROWNING_INVECTOR_PLUS"] = "Browning Invector Plus";
    choke12["CYLINDER_NO_CHOKE_"] = "Cylinder (no choke)";
    choke12["EXTRA_FULL"] = "Extra Full";
    choke12["NAPIER"] = "Napier";
    choke12["OPTIMA_HP"] = "Optima HP";
    choke12["SUPER_CYLINDER"] = "Super Cylinder";
    choke12["TEAGUE_INVECTOR_DS"] = "Teague Invector DS";
    choke12["TEAGUE_INVECTOR_PLUS"] = "Teague Invector Plus";
    choke12["TEAGUE_MOBILCHOKE"] = "Teague Mobilchoke";
    choke12["TEAGUE_OPTIMA"] = "Teague Optima";
    choke12["TEAGUE_RIZZINI_LONG"] = "Teague Rizzini Long";
    choke12["TEAGUE_RIZZINI_SHORT"] = "Teague Rizzini Short";
    choke12["TEAGUE_RIZZINI_TYPE_C"] = "Teague Rizzini Type C";
    choke12["TURKEY"] = "Turkey";
    choke12["TWIST_RATE_10"] = "Twist Rate 10";
    choke12["TWIST_RATE_12"] = "Twist Rate 12";
  })(choke1 = item2.choke1 || (item2.choke1 = {}));
  let choke2;
  ((choke22) => {
    choke22["_1_1_FULL"] = "1/1 Full";
    choke22["_1_2_MODIFIED"] = "1/2 Modified";
    choke22["_1_4_IMPROVED_CYLINDER"] = "1/4 Improved  Cylinder";
    choke22["_1_8_SKEET"] = "1/8 Skeet";
    choke22["_3_4_IMPROVED_MODIFIED"] = "3/4 Improved Modified";
    choke22["_3_8_LIGHT_MODIFIED"] = "3/8 light Modified";
    choke22["_5_8_LIGHT_IMPROVED_MODIFIED"] = "5/8 Light Improved Modified";
    choke22["_7_8_LIGHT_FULL"] = "7/8 Light full";
    choke22["ATA"] = "ATA";
    choke22["BAILEY_INVECTOR_PLUS"] = "Bailey Invector Plus";
    choke22["BERETTA_MOBILCHOKE"] = "Beretta Mobilchoke";
    choke22["BERETTA_OPTIMA"] = "Beretta Optima";
    choke22["BROWNING_INVECTOR_DS"] = "Browning Invector DS";
    choke22["BROWNING_INVECTOR_PLUS"] = "Browning Invector Plus";
    choke22["CYLINDER_NO_CHOKE_"] = "Cylinder (no choke)";
    choke22["EXTRA_FULL"] = "Extra Full";
    choke22["NAPIER"] = "Napier";
    choke22["OPTIMA_HP"] = "Optima HP";
    choke22["SUPER_CYLINDER"] = "Super Cylinder";
    choke22["TEAGUE_INVECTOR_DS"] = "Teague Invector DS";
    choke22["TEAGUE_INVECTOR_PLUS"] = "Teague Invector Plus";
    choke22["TEAGUE_MOBILCHOKE"] = "Teague Mobilchoke";
    choke22["TEAGUE_OPTIMA"] = "Teague Optima";
    choke22["TEAGUE_RIZZINI_LONG"] = "Teague Rizzini Long";
    choke22["TEAGUE_RIZZINI_SHORT"] = "Teague Rizzini Short";
    choke22["TEAGUE_RIZZINI_TYPE_C"] = "Teague Rizzini Type C";
    choke22["TURKEY"] = "Turkey";
    choke22["TWIST_RATE_10"] = "Twist Rate 10";
    choke22["TWIST_RATE_12"] = "Twist Rate 12";
  })(choke2 = item2.choke2 || (item2.choke2 = {}));
  let condition;
  ((condition2) => {
    condition2["NEW"] = "New";
    condition2["USED"] = "Used";
  })(condition = item2.condition || (item2.condition = {}));
  let status2;
  ((status3) => {
    status3["ACTIVE"] = "Active";
    status3["ADVERTISED"] = "Advertised";
    status3["COMMISION"] = "Commision";
    status3["SOLD"] = "Sold";
    status3["REPAIR"] = "Repair";
    status3["SALE_OR_RETURN"] = "Sale or return";
    status3["BUY_OR_RECEIVE"] = "Buy or receive";
    status3["DISPOSE"] = "Dispose";
    status3["STORE"] = "Store";
    status3["LOSS"] = "Loss";
    status3["LEAND"] = "Leand";
    status3["DEPOSIT"] = "Deposit";
    status3["DEALER_TRANSFER"] = "Dealer transfer";
  })(status2 = item2.status || (item2.status = {}));
})(item || (item = {}));

// models/media.ts
var media;
((media2) => {
  let type;
  ((type2) => {
    type2["IMAGE"] = "image";
    type2["VIDEO"] = "video";
  })(type = media2.type || (media2.type = {}));
})(media || (media = {}));

// models/mediaItem.ts
var mediaItem;
((mediaItem2) => {
  let type;
  ((type2) => {
    type2["IMAGE"] = "image";
    type2["VIDEO"] = "video";
  })(type = mediaItem2.type || (mediaItem2.type = {}));
})(mediaItem || (mediaItem = {}));

// models/modifier.ts
var modifier;
((modifier2) => {
  let type;
  ((type2) => {
    type2["RIFLE"] = "Rifle";
    type2["SHOTGUN"] = "Shotgun";
    type2["AIRGUN"] = "Airgun";
  })(type = modifier2.type || (modifier2.type = {}));
})(modifier || (modifier = {}));

// models/sell.ts
var sell;
((sell2) => {
  let sendConfirmation;
  ((sendConfirmation2) => {
    sendConfirmation2["YES"] = "yes";
    sendConfirmation2["NO"] = "no";
  })(sendConfirmation = sell2.sendConfirmation || (sell2.sendConfirmation = {}));
  let sendNoticeOfTransfer;
  ((sendNoticeOfTransfer2) => {
    sendNoticeOfTransfer2["YES"] = "yes";
    sendNoticeOfTransfer2["NO"] = "no";
  })(sendNoticeOfTransfer = sell2.sendNoticeOfTransfer || (sell2.sendNoticeOfTransfer = {}));
})(sell || (sell = {}));

// models/shotgun.ts
var shotgun;
((shotgun2) => {
  let trigger;
  ((trigger2) => {
    trigger2["SINGLE"] = "single";
    trigger2["DOUBLE"] = "double";
  })(trigger = shotgun2.trigger || (shotgun2.trigger = {}));
  let ejector;
  ((ejector2) => {
    ejector2["YES"] = "yes";
    ejector2["NO"] = "no";
  })(ejector = shotgun2.ejector || (shotgun2.ejector = {}));
  let choke;
  ((choke3) => {
    choke3["FIXED"] = "Fixed";
    choke3["MULTI"] = "multi";
  })(choke = shotgun2.choke || (shotgun2.choke = {}));
  let choke1;
  ((choke12) => {
    choke12["_1_1_FULL"] = "1/1 Full";
    choke12["_1_2_MODIFIED"] = "1/2 Modified";
    choke12["_1_4_IMPROVED_CYLINDER"] = "1/4 Improved  Cylinder";
    choke12["_1_8_SKEET"] = "1/8 Skeet";
    choke12["_3_4_IMPROVED_MODIFIED"] = "3/4 Improved Modified";
    choke12["_3_8_LIGHT_MODIFIED"] = "3/8 light Modified";
    choke12["_5_8_LIGHT_IMPROVED_MODIFIED"] = "5/8 Light Improved Modified";
    choke12["_7_8_LIGHT_FULL"] = "7/8 Light full";
    choke12["ATA"] = "ATA";
    choke12["BAILEY_INVECTOR_PLUS"] = "Bailey Invector Plus";
    choke12["BERETTA_MOBILCHOKE"] = "Beretta Mobilchoke";
    choke12["BERETTA_OPTIMA"] = "Beretta Optima";
    choke12["BROWNING_INVECTOR_DS"] = "Browning Invector DS";
    choke12["BROWNING_INVECTOR_PLUS"] = "Browning Invector Plus";
    choke12["CYLINDER_NO_CHOKE_"] = "Cylinder (no choke)";
    choke12["EXTRA_FULL"] = "Extra Full";
    choke12["NAPIER"] = "Napier";
    choke12["OPTIMA_HP"] = "Optima HP";
    choke12["SUPER_CYLINDER"] = "Super Cylinder";
    choke12["TEAGUE_INVECTOR_DS"] = "Teague Invector DS";
    choke12["TEAGUE_INVECTOR_PLUS"] = "Teague Invector Plus";
    choke12["TEAGUE_MOBILCHOKE"] = "Teague Mobilchoke";
    choke12["TEAGUE_OPTIMA"] = "Teague Optima";
    choke12["TEAGUE_RIZZINI_LONG"] = "Teague Rizzini Long";
    choke12["TEAGUE_RIZZINI_SHORT"] = "Teague Rizzini Short";
    choke12["TEAGUE_RIZZINI_TYPE_C"] = "Teague Rizzini Type C";
    choke12["TURKEY"] = "Turkey";
    choke12["TWIST_RATE_10"] = "Twist Rate 10";
    choke12["TWIST_RATE_12"] = "Twist Rate 12";
  })(choke1 = shotgun2.choke1 || (shotgun2.choke1 = {}));
  let choke2;
  ((choke22) => {
    choke22["_1_1_FULL"] = "1/1 Full";
    choke22["_1_2_MODIFIED"] = "1/2 Modified";
    choke22["_1_4_IMPROVED_CYLINDER"] = "1/4 Improved  Cylinder";
    choke22["_1_8_SKEET"] = "1/8 Skeet";
    choke22["_3_4_IMPROVED_MODIFIED"] = "3/4 Improved Modified";
    choke22["_3_8_LIGHT_MODIFIED"] = "3/8 light Modified";
    choke22["_5_8_LIGHT_IMPROVED_MODIFIED"] = "5/8 Light Improved Modified";
    choke22["_7_8_LIGHT_FULL"] = "7/8 Light full";
    choke22["ATA"] = "ATA";
    choke22["BAILEY_INVECTOR_PLUS"] = "Bailey Invector Plus";
    choke22["BERETTA_MOBILCHOKE"] = "Beretta Mobilchoke";
    choke22["BERETTA_OPTIMA"] = "Beretta Optima";
    choke22["BROWNING_INVECTOR_DS"] = "Browning Invector DS";
    choke22["BROWNING_INVECTOR_PLUS"] = "Browning Invector Plus";
    choke22["CYLINDER_NO_CHOKE_"] = "Cylinder (no choke)";
    choke22["EXTRA_FULL"] = "Extra Full";
    choke22["NAPIER"] = "Napier";
    choke22["OPTIMA_HP"] = "Optima HP";
    choke22["SUPER_CYLINDER"] = "Super Cylinder";
    choke22["TEAGUE_INVECTOR_DS"] = "Teague Invector DS";
    choke22["TEAGUE_INVECTOR_PLUS"] = "Teague Invector Plus";
    choke22["TEAGUE_MOBILCHOKE"] = "Teague Mobilchoke";
    choke22["TEAGUE_OPTIMA"] = "Teague Optima";
    choke22["TEAGUE_RIZZINI_LONG"] = "Teague Rizzini Long";
    choke22["TEAGUE_RIZZINI_SHORT"] = "Teague Rizzini Short";
    choke22["TEAGUE_RIZZINI_TYPE_C"] = "Teague Rizzini Type C";
    choke22["TURKEY"] = "Turkey";
    choke22["TWIST_RATE_10"] = "Twist Rate 10";
    choke22["TWIST_RATE_12"] = "Twist Rate 12";
  })(choke2 = shotgun2.choke2 || (shotgun2.choke2 = {}));
})(shotgun || (shotgun = {}));

// models/status.ts
var status;
((_status) => {
  let status2;
  ((status3) => {
    status3["ACTIVE"] = "Active";
    status3["ADVERTISED"] = "Advertised";
    status3["COMMISION"] = "Commision";
    status3["SOLD"] = "Sold";
    status3["REPAIR"] = "Repair";
    status3["SALE_OR_RETURN"] = "Sale or return";
    status3["BUY_OR_RECEIVE"] = "Buy or receive";
    status3["DISPOSE"] = "Dispose";
    status3["STORE"] = "Store";
    status3["LOSS"] = "Loss";
    status3["LEAND"] = "Leand";
    status3["DEPOSIT"] = "Deposit";
    status3["DEALER_TRANSFER"] = "Dealer transfer";
  })(status2 = _status.status || (_status.status = {}));
})(status || (status = {}));

// models/stockLevel.ts
var stockLevel;
((stockLevel2) => {
  let status2;
  ((status3) => {
    status3["IN_STOCK"] = "In stock";
    status3["OUT_OF_STOCK"] = "Out of stock";
  })(status2 = stockLevel2.status || (stockLevel2.status = {}));
})(stockLevel || (stockLevel = {}));

// models/typeOfLicence.ts
var typeOfLicence = /* @__PURE__ */ ((typeOfLicence2) => {
  typeOfLicence2["AIRGUN"] = "Airgun";
  typeOfLicence2["FIREARM"] = "Firearm";
  typeOfLicence2["PROHIBITED_WEAPONS_AND_AMMUNITION"] = "Prohibited weapons and ammunition";
  typeOfLicence2["REGISTERED_FIREARMS_DEALER_RFD_"] = "Registered Firearms Dealer (RFD)";
  typeOfLicence2["SHOTGUN"] = "Shotgun";
  typeOfLicence2["TEMPORARY_PERMIT"] = "Temporary permit";
  typeOfLicence2["NO_LICENCE"] = "No Licence";
  return typeOfLicence2;
})(typeOfLicence || {});

// core/request.ts
var isDefined = (value) => {
  return value !== void 0 && value !== null;
};
var isString = (value) => {
  return typeof value === "string";
};
var isStringWithValue = (value) => {
  return isString(value) && value !== "";
};
var isBlob = (value) => {
  return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
var isFormData = (value) => {
  return value instanceof FormData;
};
var base64 = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString("base64");
  }
};
var getQueryString = (params) => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }
  return "";
};
var getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    if (options.path?.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
var getFormData = (options) => {
  if (options.formData) {
    const formData = new FormData();
    const process = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => process(key, v));
      } else {
        process(key, value);
      }
    });
    return formData;
  }
  return void 0;
};
var resolve = async (options, resolver) => {
  if (typeof resolver === "function") {
    return resolver(options);
  }
  return resolver;
};
var getHeaders = async (config, options) => {
  const [token, username, password, additionalHeaders] = await Promise.all([
    resolve(options, config.TOKEN),
    resolve(options, config.USERNAME),
    resolve(options, config.PASSWORD),
    resolve(options, config.HEADERS)
  ]);
  const headers = Object.entries({
    Accept: "application/json",
    ...additionalHeaders,
    ...options.headers
  }).filter(([_, value]) => isDefined(value)).reduce((headers2, [key, value]) => ({
    ...headers2,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }
  if (options.body !== void 0) {
    if (options.mediaType) {
      headers["Content-Type"] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers["Content-Type"] = options.body.type || "application/octet-stream";
    } else if (isString(options.body)) {
      headers["Content-Type"] = "text/plain";
    } else if (!isFormData(options.body)) {
      headers["Content-Type"] = "application/json";
    }
  }
  return new Headers(headers);
};
var getRequestBody = (options) => {
  if (options.body !== void 0) {
    if (options.mediaType?.includes("/json")) {
      return JSON.stringify(options.body);
    } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return void 0;
};
var sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
  const controller = new AbortController();
  const request2 = {
    headers,
    body: body ?? formData,
    method: options.method,
    signal: controller.signal
  };
  if (config.WITH_CREDENTIALS) {
    request2.credentials = config.CREDENTIALS;
  }
  onCancel(() => controller.abort());
  return await fetch(url, request2);
};
var getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return void 0;
};
var getResponseBody = async (response) => {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get("Content-Type");
      if (contentType) {
        const jsonTypes = ["application/json", "application/problem+json"];
        const isJSON = jsonTypes.some((type) => contentType.toLowerCase().startsWith(type));
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return void 0;
};
var catchErrorCodes = (options, result) => {
  const errors = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }
  if (!result.ok) {
    const errorStatus = result.status ?? "unknown";
    const errorStatusText = result.statusText ?? "unknown";
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch (e) {
        return void 0;
      }
    })();
    throw new ApiError(
      options,
      result,
      `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`
    );
  }
};
var request = (config, options) => {
  return new CancelablePromise(async (resolve2, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
        const responseBody = await getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody
        };
        catchErrorCodes(options, result);
        resolve2(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// services/ItemService.ts
var ItemService = class {
  /**
   * Add a new item to the Armory
   * Add a new Armory item. By default the stock level will be set to 1, and the stock status will be set to In stock. Further changes to stock levels can be set via item/stock/
   * @param requestBody Create a new item
   * @returns any Successful operation
   * @throws ApiError
   */
  static addItem(requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/item",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        405: `Invalid input`
      }
    });
  }
  /**
   * Advertise the item with a price.
   * Add the price attributes to the item, and place the advertisement.
   * @param reference Advertise the item based on the reference. The reference is your internal id, used initality to create the item.
   * @param requestBody Create a new advertisement with a price
   * @returns any Successful operation
   * @throws ApiError
   */
  static addItemPrice(reference, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/item/advertisement/{reference}",
      path: {
        "reference": reference
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        405: `Invalid input`
      }
    });
  }
  /**
   * Advertise the item as an auction.
   * Add the auction attributes to the item, and place the advertisement.
   * @param reference Advertise the item based on the reference. The reference is your internal id, used initality to create the item.
   * @param requestBody Create a new advertisement with a price
   * @returns any Successful operation
   * @throws ApiError
   */
  static addItemAution(reference, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/item/auction/{reference}",
      path: {
        "reference": reference
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        405: `Invalid input`
      }
    });
  }
  /**
   * Sell the item.
   * Once an item is sold the advertisement will end and the status of the item will be set to Sold.
   * @param reference Sell the item based on the reference. The reference is your internal id, used initality to create the item.
   * @param requestBody Sells the item and kicks off further sell process.
   * @returns any Successful operation
   * @throws ApiError
   */
  static sellItem(reference, requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/item/sell/{reference}",
      path: {
        "reference": reference
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        405: `Invalid input`
      }
    });
  }
  /**
   * Get an item by its reference number
   * @param reference Get the item based on the reference. The reference is your internal id, used initality to create the item.
   * @returns any successful operation
   * @throws ApiError
   */
  static getItemByReference(reference) {
    return request(OpenAPI, {
      method: "GET",
      url: "/item/reference/{reference}",
      path: {
        "reference": reference
      },
      errors: {
        400: `Invalid tag value`
      }
    });
  }
  /**
   * Find item by ID
   * Returns a single item by the ID
   * @param id ID of item to return
   * @returns any successful operation
   * @throws ApiError
   */
  static getItemyById(id) {
    return request(OpenAPI, {
      method: "GET",
      url: "/item/{Id}",
      path: {
        "Id": id
      },
      errors: {
        400: `Invalid ID supplied`,
        404: `Item not found`
      }
    });
  }
  /**
   * Find item status by ID
   * Returns a single item
   * @param id ID of item to return
   * @returns any successful operation
   * @throws ApiError
   */
  static getItemStatusById(id) {
    return request(OpenAPI, {
      method: "GET",
      url: "/item/status/{Id}",
      path: {
        "Id": id
      },
      errors: {
        400: `Invalid ID supplied`,
        404: `item not found`
      }
    });
  }
  /**
   * Update an existing armory item
   * Update an item status by Armoury ID.
   * @param id ID of item to return
   * @returns any Successful operation
   * @throws ApiError
   */
  static updateItemStatusById(id) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/item/status/{Id}",
      path: {
        "Id": id
      },
      errors: {
        400: `Invalid ID or reference supplied`,
        404: `item not found`,
        405: `Validation exception`
      }
    });
  }
  /**
   * Find item by reference
   * Returns a single item by reference
   * @param reference reference of item to return
   * @returns any successful operation
   * @throws ApiError
   */
  static getItemStutusByReference(reference) {
    return request(OpenAPI, {
      method: "GET",
      url: "/item/status/reference/{reference}",
      path: {
        "reference": reference
      },
      errors: {
        400: `Invalid reference supplied`,
        404: `item not found`
      }
    });
  }
  /**
   * Update the status of existing armory item
   * Update an item status by reference.
   * @param reference reference of item to return
   * @param status The status
   * @returns any Successful operation
   * @throws ApiError
   */
  static updateItemStatusByReference(reference, status2) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/item/status/reference/{reference}",
      path: {
        "reference": reference
      },
      query: {
        "status": status2
      },
      errors: {
        400: `Invalid reference supplied`,
        404: `item not found`,
        405: `Validation exception`
      }
    });
  }
  /**
   * Find items status by ID
   * Returns a single item status by id and the count
   * @param id ID of the item
   * @returns any successful operation
   * @throws ApiError
   */
  static getItemStockById(id) {
    return request(OpenAPI, {
      method: "GET",
      url: "/item/stock/{ID}",
      path: {
        "ID": id
      },
      errors: {
        400: `Invalid ID supplied`,
        404: `item not found`
      }
    });
  }
  /**
   * Update an existing item stock levels
   * Update an items stock levels by ID.
   * @param requestBody Update an existing item status in the Armoury.
   * @returns any Successful operation
   * @throws ApiError
   */
  static updateItemStockById(requestBody) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/item/stock/{ID}",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid ID or reference supplied`,
        404: `item not found`,
        405: `Validation exception`
      }
    });
  }
  /**
   * Find item by reference
   * Returns a single item by reference
   * @param reference reference of items stock levels to return
   * @returns any successful operation
   * @throws ApiError
   */
  static getItemStockByReference(reference) {
    return request(OpenAPI, {
      method: "GET",
      url: "/item/stock/reference/{reference}",
      path: {
        "reference": reference
      },
      errors: {
        400: `Invalid ID supplied`,
        404: `item not found`
      }
    });
  }
  /**
   * Update an existing items stock levels
   * Update an item stock levels by reference.
   * @param requestBody Update an existing item stock level.
   * @returns any Successful operation
   * @throws ApiError
   */
  static updateItemStockByReference(requestBody) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/item/stock/reference/{reference}",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid ID or reference supplied`,
        404: `item not found`,
        405: `Validation exception`
      }
    });
  }
};

// services/MetadataService.ts
var MetadataService = class {
  /**
   * Add a new calibre
   * creates a new calibre in the correct item
   * @param requestBody
   * @returns any Successful operation
   * @throws ApiError
   */
  static createCalibre(requestBody) {
    return request(OpenAPI, {
      method: "POST",
      url: "/Metadata/calibre",
      body: requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Logs user into the system
   * @param calibre The calibre
   * @param type the type of firearm for calibre e.g. shotgun for 12 Gauge
   * @param match This is how the data is matched to your input. Numbers only will remove all other character. For example 12 Gauge would return 12. If you select fuzzy, and put in 410, then 0.410 Gauge willl be found.
   * @returns any Successful operation
   * @throws ApiError
   */
  static loginUser(calibre2, type, match) {
    return request(OpenAPI, {
      method: "GET",
      url: "/Metadata/calibre",
      query: {
        "calibre": calibre2,
        "type": type,
        "Match": match
      },
      errors: {
        400: `Invalid calibre supplied`
      }
    });
  }
  /**
   * Retrieves a list of all categories.
   * Retrieve catefory information.
   * @returns string Successful operation
   * @throws ApiError
   */
  static getCategory() {
    return request(OpenAPI, {
      method: "GET",
      url: "/Metadata/category",
      errors: {
        400: `Invalid calibre supplied`
      }
    });
  }
  /**
   * Get subCategory
   * Returns all the subcategoies base on the category.
   * @param category Category for the subcategory
   * @returns string successful operation
   * @throws ApiError
   */
  static getSubCategory(category) {
    return request(OpenAPI, {
      method: "GET",
      url: "/Metadata/subCategory/{category}",
      path: {
        "category": category
      },
      errors: {
        400: `Invalid category supplied`,
        404: `Category not found`
      }
    });
  }
  /**
   * Add sub Category
   * Add a new sub Category.
   * @param category The subcategory for Category
   * @param subcategory The new subcateogry to be added
   * @returns string successful operation
   * @returns any successful operation
   * @throws ApiError
   */
  static addSubCategory(category, subcategory) {
    return request(OpenAPI, {
      method: "POST",
      url: "/Metadata/subCategory/{category}",
      path: {
        "category": category
      },
      query: {
        "Subcategory": subcategory
      }
    });
  }
  /**
   * Returns all further categories
   * Returns all the further categoies based on the sub category
   * @param subCategory Pass in the Sub Cateogry to retrieve all further categories.
   * @returns string successful operation
   * @throws ApiError
   */
  static getFurtherCategory(subCategory) {
    return request(OpenAPI, {
      method: "GET",
      url: "/Metadata/furtherCategory/{subCategory}:",
      path: {
        "subCategory": subCategory
      },
      errors: {
        400: `Invalid sub category supplied`,
        404: `Sub category not found`
      }
    });
  }
  /**
   * Add a new sub Category, under an existing category.
   * Add a new category.
   * @param subCategory The sub category to add the futher category against.
   * @param furtherCategory The new further cateogry to be added.
   * @returns string successful operation
   * @throws ApiError
   */
  static addfurtherCategory(subCategory, furtherCategory) {
    return request(OpenAPI, {
      method: "POST",
      url: "/Metadata/furtherCategory/{subCategory}:",
      path: {
        "subCategory": subCategory
      },
      query: {
        "furtherCategory": furtherCategory
      },
      errors: {
        400: `Invalid sub category supplied`,
        404: `Sub category not found`
      }
    });
  }
};
export {
  ApiError,
  CancelError,
  CancelablePromise,
  ItemService,
  MetadataService,
  OpenAPI,
  calibre,
  catalogue,
  firearm,
  item,
  media,
  mediaItem,
  modifier,
  sell,
  shotgun,
  status,
  stockLevel,
  typeOfLicence
};
