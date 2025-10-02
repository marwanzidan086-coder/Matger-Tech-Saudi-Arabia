
// This file contains a manually curated map of similar products for each product ID.
// Key: The ID of the product being viewed.
// Value: An array of up to 4 product IDs that are recommended as similar.

export const similarProductsMap: Record<string, string[]> = {
  'product-1': ['product-2', 'product-15', 'product-89', 'product-118'], // Lantern -> Other solar/camping lights
  'product-2': ['product-1', 'product-15', 'product-7', 'product-143'], // Large solar spotlight -> Other solar/camping lights
  'product-3': ['product-28', 'product-36', 'product-4', 'product-27'], // 32-inch screen -> Other screens/media devices
  'product-4': ['product-27', 'product-36', 'product-62', 'product-23'], // Gaming Console -> Other gaming/controllers
  'product-5': ['product-8', 'product-43', 'product-50', 'product-42'], // Solar power bank -> Other power banks
  'product-6': ['product-11', 'product-44', 'product-42', 'product-8'], // Hard drive -> Other storage/adapters/power
  'product-7': ['product-2', 'product-143', 'product-45', 'product-1'], // Solar lights -> Other solar lights
  'product-8': ['product-5', 'product-43', 'product-50', 'product-42'], // 10000mAh power bank -> Other power banks
  'product-9': ['product-19', 'product-32', 'product-39', 'product-60'], // Vlogging camera -> Other cameras
  'product-10': ['product-16', 'product-17', 'product-52', 'product-13'], // Headset -> Other headsets/audio
  'product-11': ['product-44', 'product-6', 'product-24', 'product-12'], // PC Adapter -> Other adapters/tablets
  'product-12': ['product-21', 'product-24', 'product-25', 'product-37'], // Tablet with keyboard -> Other tablets
  'product-13': ['product-65', 'product-122', 'product-128', 'product-53'], // Smart bottle -> Other smart home/kitchen
  'product-14': ['product-30', 'product-8', 'product-43', 'product-5'], // iPhone 15 case -> iPhone 13 case, power banks
  'product-15': ['product-2', 'product-1', 'product-89', 'product-70'], // Spotlight power bank -> Other lights/power banks
  'product-16': ['product-17', 'product-52', 'product-10', 'product-22'], // Noxon Airpods -> Other airpods/smart watches
  'product-17': ['product-16', 'product-52', 'product-10', 'product-26'], // i12 Airpods -> Other airpods/smart watches
  'product-18': ['product-48', 'product-49', 'product-8', 'product-52'], // Bundle -> Items from bundle
  'product-19': ['product-9', 'product-32', 'product-39', 'product-61'], // Camera -> Other cameras
  'product-20': ['product-22', 'product-26', 'product-34', 'product-49'], // Smart watch -> Other smart watches & rings
  'product-21': ['product-12', 'product-24', 'product-25', 'product-4'], // A20 Tablet -> Other tablets
  'product-22': ['product-20', 'product-26', 'product-34', 'product-49'], // Ultra Smart Watch -> Other smart watches & rings
  'product-23': ['product-4', 'product-27', 'product-36', 'product-144'], // Gaming combo -> Other gaming/desktop items
  'product-24': ['product-12', 'product-21', 'product-25', 'product-36'], // iPhone-like tablet -> Other tablets
  'product-25': ['product-12', 'product-21', 'product-24', 'product-37'], // Note 15 tablet -> Other tablets
  'product-26': ['product-20', 'product-22', 'product-34', 'product-49'], // Ultra T8 watch -> Other smart watches & rings
  'product-27': ['product-4', 'product-36', 'product-62', 'product-72'], // 4K Gaming Console -> Other gaming
  'product-28': ['product-3', 'product-36', 'product-4', 'product-9'], // Portable Cinema -> Other media devices
  'product-30': ['product-14', 'product-8', 'product-43', 'product-5'], // iPhone 13 case -> iPhone 15 case, power banks
  'product-31': ['product-41', 'product-33', 'product-7', 'product-64'], // Mini charging station -> Other solar/power
  'product-32': ['product-39', 'product-9', 'product-60', 'product-107'], // Bulb camera -> Other cameras
  'product-33': ['product-41', 'product-31', 'product-7', 'product-64'], // Solar power kit -> Other solar/power
  'product-34': ['product-104', 'product-20', 'product-49', 'product-22'], // Smart Health Ring -> Tasbeeh Ring, Smart Watches
  'product-35': ['product-87', 'product-11', 'product-44', 'product-6'], // Signal booster -> Other small gadgets
  'product-36': ['product-28', 'product-4', 'product-27', 'product-24'], // Android TV Box -> Other media/gaming
  'product-37': ['product-12', 'product-21', 'product-24', 'product-25'], // AI Translator -> High-tech gadgets/tablets
  'product-38': ['product-48', 'product-18', 'product-55', 'product-150'], // Travel backpack -> Other bags/travel items
  'product-39': ['product-32', 'product-9', 'product-60', 'product-107'], // Mini security camera -> Other cameras
  'product-40': ['product-34', 'product-49', 'product-20', 'product-83'], // Body scale -> Other health devices
  'product-41': ['product-31', 'product-33', 'product-1', 'product-118'], // Camping station -> Other solar/camping
  'product-42': ['product-8', 'product-5', 'product-43', 'product-50'], // 100000mAh power bank -> Other power banks
  'product-43': ['product-8', 'product-5', 'product-42', 'product-50'], // Budi power bank -> Other power banks
  'product-44': ['product-11', 'product-6', 'product-24', 'product-12'], // Adapter -> Other adapters/tablets
  'product-45': ['product-7', 'product-2', 'product-143', 'product-1'], // Solar garden light -> Other solar lights
  'product-46': ['product-53', 'product-111', 'product-119', 'product-120'], // Office light -> Other home lighting
  'product-47': ['product-54', 'product-152', 'product-153', 'product-101'], // Folding table -> Other tables
  'product-48': ['product-38', 'product-18', 'product-55', 'product-87'], // Waterproof bag -> Other bags/travel items
  'product-49': ['product-20', 'product-22', 'product-26', 'product-34'], // Sports watch -> Other health/wearables
  'product-50': ['product-5', 'product-8', 'product-42', 'product-43'], // Wireless power bank -> Other power banks
  'product-51': ['product-65', 'product-87', 'product-35', 'product-104'], // Phone holder -> Other phone accessories
  'product-52': ['product-16', 'product-17', 'product-10', 'product-22'], // Modern Airpods -> Other airpods/watches
  'product-53': ['product-46', 'product-111', 'product-128', 'product-13'], // Smart Lamp -> Other smart home/lighting
  'product-54': ['product-47', 'product-152', 'product-153', 'product-101'], // White folding table -> Other tables
  'product-55': ['product-38', 'product-48', 'product-92', 'product-105'], // Waterproof pouch -> Other travel/outdoor
  'product-56': ['product-74', 'product-81', 'product-58', 'product-63'], // Air blower -> Other tools
  'product-57': ['product-101', 'product-115', 'product-66', 'product-92'], // Camping chair/bed -> Other chairs/camping
  'product-58': ['product-71', 'product-63', 'product-80', 'product-96'], // Tire drill -> Other drills/tools
  'product-59': ['product-75', 'product-94', 'product-81', 'product-67'], // Air compressor -> Other car tools
  'product-60': ['product-61', 'product-32', 'product-39', 'product-9'], // 3-camera dash cam -> Other dash cams
  'product-61': ['product-60', 'product-32', 'product-39', 'product-9'], // WiFi dash cam -> Other dash cams
  'product-62': ['product-72', 'product-73', 'product-85', 'product-97'], // Fun driving bundle -> Other kids toys
  'product-63': ['product-95', 'product-58', 'product-71', 'product-80'], // Multi-cutter -> Other power tools
  'product-64': ['product-31', 'product-41', 'product-33', 'product-7'], // Solar fan -> Other solar products
  'product-65': ['product-13', 'product-51', 'product-122', 'product-128'], // Bottle w/ phone holder -> Other smart bottles/holders
  'product-66': ['product-92', 'product-57', 'product-101', 'product-115'], // Cooler/Table -> Other camping/outdoor
  'product-67': ['product-59', 'product-75', 'product-94', 'product-81'], // Car sun shades -> Other car accessories
  'product-68': ['product-96', 'product-80', 'product-58', 'product-71'], // Hammer drill -> Other heavy-duty drills
  'product-69': ['product-140', 'product-75', 'product-94', 'product-132'], // Glass defogger -> Other car/cleaning
  'product-70': ['product-89', 'product-15', 'product-1', 'product-2'], // Laser flashlight -> Other flashlights/camping
  'product-71': ['product-58', 'product-68', 'product-80', 'product-96'], // BOSSS drill -> Other heavy-duty drills
  'product-72': ['product-99', 'product-85', 'product-73', 'product-62'], // Gel blaster -> Other toys/games
  'product-73': ['product-72', 'product-88', 'product-85', 'product-97'], // Bubble machine -> Other kids toys
  'product-74': ['product-56', 'product-81', 'product-144', 'product-98'], // Multi-head blower -> Other blowers/vacuums
  'product-75': ['product-59', 'product-94', 'product-81', 'product-67'], // Portable car washer -> Other car tools
  'product-76': ['product-63', 'product-95', 'product-58', 'product-71'], // Metal cutting attachment -> Other tools
  'product-77': ['product-82', 'product-83', 'product-40', 'product-49'], // Boxing machine -> Other health/fitness
  'product-78': ['product-85', 'product-72', 'product-73', 'product-88'], // Drawing tablet -> Other kids items
  'product-79': ['product-83', 'product-102', 'product-77', 'product-82'], // Pilates bar -> Other fitness
  'product-80': ['product-68', 'product-96', 'product-58', 'product-71'], // 120-piece drill kit -> Other drills
  'product-81': ['product-144', 'product-74', 'product-56', 'product-59'], // Portable vacuum -> Other vacuums/blowers
  'product-82': ['product-77', 'product-79', 'product-83', 'product-40'], // Jumping machine -> Other fitness
  'product-83': ['product-79', 'product-102', 'product-77', 'product-82'], // Power twister -> Other fitness
  'product-84': ['product-62', 'product-72', 'product-73', 'product-85'], // Pickleball set -> Other games/toys
  'product-85': ['product-78', 'product-72', 'product-73', 'product-88'], // Flying ball toy -> Other kids toys
  'product-86': ['product-70', 'product-89', 'product-15', 'product-1'], // Survival hammer -> Other tools/outdoor
  'product-87': ['product-35', 'product-34', 'product-20', 'product-51'], // Bluetooth tracker -> Other gadgets
  'product-88': ['product-73', 'product-85', 'product-62', 'product-72'], // Dancing tricycle -> Other kids toys
  'product-89': ['product-70', 'product-15', 'product-1', 'product-2'], // Baseball bat flashlight -> Other flashlights
  'product-90': ['product-67', 'product-59', 'product-75', 'product-81'], // LED valve caps -> Other car accessories
  'product-91': ['product-136', 'product-75', 'product-59', 'product-67'], // Water hose nozzle -> Other hose/garden
  'product-92': ['product-66', 'product-57', 'product-101', 'product-115'], // Privacy tent -> Other camping gear
  'product-93': ['product-121', 'product-119', 'product-120', 'product-111'], // Titanic humidifier -> Other home decor/lighting
  'product-94': ['product-59', 'product-75', 'product-81', 'product-67'], // Car polisher -> Other car tools
  'product-95': ['product-106', 'product-63', 'product-76', 'product-58'], // Portable chainsaw -> Other power tools
  'product-96': ['product-68', 'product-80', 'product-58', 'product-71'], // Electric hammer drill -> Other heavy-duty drills
  'product-97': ['product-62', 'product-72', 'product-88', 'product-85'], // Red electric car -> Other kids toys
  'product-98': ['product-76', 'product-63', 'product-95', 'product-58'], // Paint sprayer -> Other tools
  'product-99': ['product-72', 'product-84', 'product-85', 'product-62'], // Lie detector game -> Other games/toys
  'product-100': ['product-67', 'product-59', 'product-75', 'product-81'], // Tire plugs -> Other car tools
  'product-101': ['product-57', 'product-115', 'product-47', 'product-66'], // Folding chair w/ table -> Other chairs/camping
  'product-102': ['product-83', 'product-79', 'product-77', 'product-82'], // Exercise wheel -> Other fitness
  'product-103': ['product-76', 'product-63', 'product-95', 'product-145'], // Super glue -> Other tools
  'product-104': ['product-34', 'product-49', 'product-20', 'product-87'], // Tasbeeh Ring -> Smart Ring, other wearables
  'product-105': ['product-125', 'product-141', 'product-57', 'product-92'], // Pool lounge chair -> Other outdoor/leisure
  'product-106': ['product-95', 'product-63', 'product-76', 'product-58'], // Electric scissors -> Other power tools
  'product-107': ['product-32', 'product-39', 'product-60', 'product-9'], // Doorbell camera -> Other cameras
  'product-108': ['product-110', 'product-140', 'product-123', 'product-137'], // Clothes/shoe washer -> Other home appliances
  'product-109': ['product-113', 'product-151', 'product-124', 'product-126'], // Cooling/blending bundle -> Other bundles
  'product-110': ['product-108', 'product-140', 'product-147', 'product-112'], // Portable washer bundle -> Other home/laundry
  'product-111': ['product-53', 'product-46', 'product-119', 'product-120'], // Drone fan -> Other smart lighting
  'product-112': ['product-150', 'product-117', 'product-147', 'product-140'], // 3-tier cabinet -> Other storage
  'product-113': ['product-109', 'product-151', 'product-139', 'product-116'], // Blender/Toaster bundle -> Other bundles
  'product-114': ['product-132', 'product-69', 'product-75', 'product-91'], // 3-in-1 glass cleaner -> Other cleaning
  'product-115': ['product-57', 'product-101', 'product-141', 'product-47'], // Mesh relaxing chair -> Other chairs
  'product-116': ['product-113', 'product-148', 'product-123', 'product-155'], // Toaster -> Other kitchen appliances
  'product-117': ['product-112', 'product-150', 'product-147', 'product-140'], // Laundry sorter -> Other storage
  'product-118': ['product-127', 'product-138', 'product-1', 'product-86'], // Camping stove -> Other camping gear
  'product-119': ['product-120', 'product-46', 'product-53', 'product-93'], // LED strip -> Other lighting
  'product-120': ['product-119', 'product-121', 'product-46', 'product-53'], // Star/Moon curtain -> Other lighting
  'product-121': ['product-120', 'product-93', 'product-119', 'product-46'], // Ramadan lamp -> Other lighting
  'product-122': ['product-128', 'product-13', 'product-65', 'product-53'], // Self-stirring mug -> Other kitchen gadgets
  'product-123': ['product-154', 'product-135', 'product-129', 'product-142'], // Electric chopper -> Other kitchen tools
  'product-124': ['product-126', 'product-109', 'product-151', 'product-64'], // Denx air cooler -> Other coolers
  'product-125': ['product-141', 'product-105', 'product-57', 'product-92'], // Inflatable lounge chair -> Other inflatable furniture
  'product-126': ['product-124', 'product-109', 'product-151', 'product-64'], // DLC air cooler -> Other coolers
  'product-127': ['product-118', 'product-138', 'product-1', 'product-86'], // 2-in-1 heater/stove -> Other camping gear
  'product-128': ['product-122', 'product-13', 'product-65', 'product-53'], // Heating/cooling cup -> Other kitchen gadgets
  'product-129': ['product-135', 'product-142', 'product-123', 'product-145'], // Vegetable slicer -> Other kitchen tools
  'product-130': ['product-64', 'product-31', 'product-41', 'product-33'], // Mosquito killer -> Other home/outdoor
  'product-131': ['product-66', 'product-92', 'product-118', 'product-127'], // Smart camping tank -> Other camping gear
  'product-132': ['product-129', 'product-135', 'product-142', 'product-145'], // Splatter screen -> Other kitchen tools
  'product-133': ['product-130', 'product-64', 'product-31', 'product-41'], // Mouse trap -> Other home/pest control
  'product-134': ['product-87', 'product-35', 'product-51', 'product-104'], // Gas level indicator -> Other gadgets
  'product-135': ['product-129', 'product-142', 'product-123', 'product-145'], // 3-in-1 slicer/grater -> Other kitchen tools
  'product-136': ['product-91', 'product-75', 'product-59', 'product-67'], // Expandable hose -> Other garden/car tools
  'product-137': ['product-108', 'product-110', 'product-140', 'product-149'], // Lint remover -> Other home care
  'product-138': ['product-118', 'product-127', 'product-1', 'product-86'], // 5-burner stove -> Other camping gear
  'product-139': ['product-113', 'product-155', 'product-123', 'product-116'], // Kettle/Teapot set -> Other kitchen appliances
  'product-140': ['product-112', 'product-150', 'product-117', 'product-108'], // Movable base -> Other storage/home
  'product-141': ['product-125', 'product-105', 'product-57', 'product-92'], // Inflatable sofa -> Other inflatable furniture
  'product-142': ['product-129', 'product-135', 'product-123', 'product-145'], // Potato cutter -> Other kitchen tools
  'product-143': ['product-2', 'product-7', 'product-15', 'product-45'], // Solar spotlight -> Other solar lights
  'product-144': ['product-81', 'product-74', 'product-56', 'product-23'], // Desktop robot vacuum -> Other vacuums/gadgets
  'product-145': ['product-129', 'product-135', 'product-142', 'product-123'], // Grape leaf roller -> Other kitchen tools
  'product-146': ['product-118', 'product-127', 'product-138', 'product-1'], // 4-burner stove -> Other stoves
  'product-147': ['product-112', 'product-150', 'product-117', 'product-110'], // Wall-mounted rack -> Other storage
  'product-148': ['product-123', 'product-116', 'product-139', 'product-155'], // Dough ball maker -> Other kitchen appliances
  'product-149': ['product-137', 'product-108', 'product-110', 'product-140'], // Cordless iron bundle -> Other home appliances
  'product-150': ['product-112', 'product-117', 'product-147', 'product-140'], // Storage cart -> Other storage
  'product-151': ['product-109', 'product-113', 'product-124', 'product-126'], // Blender/Chopper/AC bundle -> Other bundles
  'product-152': ['product-47', 'product-54', 'product-153', 'product-101'], // Adjustable table -> Other tables
  'product-153': ['product-152', 'product-47', 'product-54', 'product-101'], // Folding bed table -> Other tables
  'product-154': ['product-123', 'product-135', 'product-129', 'product-142'], // 3L meat grinder -> Other kitchen appliances
  'product-155': ['product-139', 'product-113', 'product-123', 'product-116'], // Juice maker set -> Other kitchen appliances
};
