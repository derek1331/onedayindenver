const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/onedayindenver"
);

const eventSeed = [
        {
        name: "Roxburough State Park",
        catagory: "Adventure",
        rating: 3.0,
        time: 2.5,
        drive: 30,
        address: "4751 Roxborough Dr, Littleton, CO 80125",
        lat: 39.585202,
        long: -105.008655,
        attributes: ["Hiking", "Nature", "Pictures"],
        url: "http://cpw.state.co.us/placestogo/parks/Roxborough",
        description: "Roxborough is a Colorado Natural Area and a National Natural Landmark for good reason. The park, with close to 4000-acres, is filled with dramatic red-rock formations, distinct plant communities, and a host of wildlife ranging from black bears to mule deer.",
        advice: "If you are short on time, just hike up to Lyons Overlook Trial!",
        img: ""
    },
    {
        name: "Waterton Canyon",
        catagory: "Adventure",
        rating: 3.0,
        time: 3.0,
        drive: 30,
        address: "11300 Waterton Road Littleton, CO 80125",
        lat: 39.585202,
        long: -105.008655,
        attributes: ["Hiking", "Nature", "Pictures"],
        url: "http://www.coloradotrail.org/waterton.html",
        description: "Waterton Canyon is the Denver terminus for The Colorado Trail. The trailhead, parking and 6-mile canyon are administered by Denver Water and open to hike, bike and horse. Though you travel a wide gravel road, it's alongside the South Platte River where wildlife is abundant and often seen.",
        advice: "Walk across the road to get to the trail head",
        img: ""
    },
    {
        name: "Chatfield State Park",
        catagory: "Adventure",
        rating: 2.5,
        time: 2.5,
        drive: 30,
        address: "11500 N Roxborough Park Rd, Littleton, CO 80125",
        lat: 39.585202,
        long: -105.008655,
        attributes: ["Hiking", "Nature", "Water",],
        url: "http://cpw.state.co.us/placestogo/parks/Chatfield",
        description: "Float your boat in the lake, bicycle or hike on a trail that provides scenic views of the neighboring foothills and Platte River valley, camp, ride a horse and even fly a model airplane - all at Chatfield State Park, nestled next to the foothills southwest of Denver.",
        advice: "Chatfield has an amazing dog park for your furry friend!",
        img: ""
    },
    {
        name: "Look Out Mountain",
        catagory: "Adventure",
        rating: 4.0,
        time: 2.5,
        drive: 30,
        address: "987 Lookout Mountain Rd, Golden, CO 80401",
        lat: 39.741926,
        long: -105.228356,
        attributes: ["Hiking", "Nature", "Pictures"],
        url: "https://www.visitgolden.com/places-to-go/lookout-mountain/",
        description: "Lookout Mountain Park is a Denver Mountain Park located around 12 miles west of downtown Denver overlooking Golden, Colorado. It consists of 65.7 acres of evergreen wilderness atop Lookout Mountain, named for its being a favored lookout point of the native Ute Indian tribe.",
        advice: "If you want to hike Look Out Mountain search for look out mountain trial on site a like AllTrials",
        img: ""
    },
    {
        name: "North Table Mountain Trail",
        catagory: "Adventure",
        rating: 3.75,
        time: 2.5,
        drive: 30,
        address: "4788 CO-93, Golden, CO 80403",
        lat: 39.778943,
        long: -105.231783,
        attributes: ["Hiking", "Nature", "Pictures"],
        url: "https://www.cityofgolden.net/play/recreation-attractions/trails/north-table-mountain-trail/",
        description: "North Table Mountain Trail is 1.5 miles and traverses the southwest side of North Table Mountain below the cliff band. There are excellent views of the Golden Valley. The trail is moderate to advanced in difficulty, with 300 feet elevation gain from the north and 400 feet elevation gain from the south. The trail branches left to the Golden Cliffs Trail shortly after the trailhead in the north. Stay right to keep on the North Table Mountain Trail. The trail terminates near Peary Parkway at its southern end.",
        advice: "The inital ascent is HARD, but the views are worth the effort!",
        img: ""
    },
    {
        name: "Black Hawk Casinos",
        catagory: "Entertainment",
        rating: 4.00,
        time: 5,
        drive: 60,
        address: "132 Lawrence St, Central City, CO 80427",
        lat: 39.800791,
        long: -105.511258,
        attributes: ["Drinking", "Night Life", "Gambling"],
        url: "https://www.cityofblackhawk.org/",
        description: "Colorado’s gaming powerhouse pushing to become resort destination with offerings beyond casinos!",
        img: ""
    },
    {
        name: "Blake Street",
        catagory: "Entertainment",
        rating: 4.00,
        time: 2,
        drive: 5,
        address: "1909 Blake St, Denver, CO 80202",
        lat: 39.753681,
        long: -104.995415,
        attributes: ["Drinking", "Night Life", "Party"],
        url: "http://www.haytersandco.com/",
        description: "Heart of Denver's night life. Explore many bars and clubs near Coors Field",
        img: ""
    },
    {
        name: "16th Street Mall",
        catagory: "Entertainment",
        rating: 4.00,
        time: 2,
        drive: 5,
        address: "1001 16th St Mall, Denver, CO 80265",
        lat: 39.740959,
        long: -104.985798,
        attributes: ["Drinking", "Dinning", "Shopping"],
        url: "https://www.denver.org/things-to-do/denver-attractions/16th-street-mall/",
        description: "The 16th Street Mall is a pedestrian and transit mall in Denver, Colorado. The mall, 1.25 miles long, runs along 16th Street in downtown Denver, from Wewatta Street to the intersection of 16th Avenue and Broadway. It is home to over 300 locally owned/chain stores, over 50 restaurants, and the Denver Pavilions.",
        img: ""
    },
    {
        name: "little Man Icecream",
        catagory: "Dining",
        rating: 4.00,
        time: 2,
        drive: 5,
        address: "1001 16th St Mall, Denver, CO 80265",
        lat: 39.740959,
        long: -104.985798,
        attributes: ["Drinking", "Dinning", "Shopping"],
        url: "https://www.denver.org/things-to-do/denver-attractions/16th-street-mall/",
        description: "The 16th Street Mall is a pedestrian and transit mall in Denver, Colorado. The mall, 1.25 miles long, runs along 16th Street in downtown Denver, from Wewatta Street to the intersection of 16th Avenue and Broadway. It is home to over 300 locally owned/chain stores, over 50 restaurants, and the Denver Pavilions.",
        img: ""
    },
    {
        name: "Pearl Street Boulder, CO",
        catagory: "Entertainment",
        rating: 4.00,
        time: 4,
        drive: 45,
        address: "942 Broadway #301, Boulder, CO 80302",
        lat: 40.017112,
        long: -105.279599,
        attributes: ["Drinking", "Dinning", "Shopping"],
        url: "https://www.boulderdowntown.com/",
        description: "The Pearl Street Mall is a four block pedestrian mall in Boulder, Colorado. The pedestrian area stretches from 11th Street to 15th Street along Pearl Street and is home to a number of businesses and restaurants as well as the Boulder County Courthouse.",
        img: ""
    },
    {
        name: "Flat Irons Boulder, CO",
        catagory: "Adventure",
        rating: 4.00,
        time: 3.5,
        drive: 45,
        address: "Chautauqua Park, Baseline Rd & 9th St, Boulder, CO 80302",
        lat: 53.540974,
        long: -113.368978,
        attributes: ["Hiking", "Nature", "Pictures"],
        url: "https://www.bouldercoloradousa.com/things-to-do/insider-guides/flatirons/",
        description: "The Flatirons are rock formations in the western United States, near Boulder, Colorado, consisting of flatirons. There are five large, numbered Flatirons ranging from north to south along the east slope of Green Mountain, and the term 'The Flatirons' sometimes refers to these five alone.",
        img: ""
    },
    {
        name: "Red Rocks Amphitheater",
        catagory: "Entertainment",
        rating: 4.5,
        time: 2,
        drive: 30,
        address: "18300 W Alameda Pkwy, Morrison, CO 80465",
        lat: 39.667721,
        long: -105.207268,
        attributes: ["Hiking", "Music", "Pictures"],
        url: "https://www.bouldercoloradousa.com/things-to-do/insider-guides/flatirons/",
        description: "Red Rocks Amphitheatre is a rock structure near Morrison, Colorado, 10 miles west of Denver, where concerts are given in the open-air amphitheatre.",
        advice: "Its free to go anyday, but go early because Red Rocks is shut down around 2PM to prepare for concerts.",
        img: ""
    },
    {
        name: "Milk Market",
        catagory: "Dining",
        rating: 3.75,
        time: 1.5,
        drive: 5,
        address: "1800 Wazee St #100, Denver, CO 80202",
        lat: 39.753100,
        long: -104.997260,
        attributes: ["Food", "Shopping", "Pictures"],
        url: "https://www.denvermilkmarket.com/",
        description: "13 restaurant stalls, three bars, and an artisan food market are now within walking distance of thousands of downtown Denver residents and visitors.",
        advice: "Check out the beautiful ally in the back of the Milk Market!",
        img: "onedayindenver/public/images/milk_market.jpg",
    },
    {
        name: "Denver Botanic Gardens",
        catagory: "Entertainment",
        rating: 3.00,
        time: 2.75,
        drive: 5,
        address: "1007 York St, Denver, CO 80206",
        lat: 39.745080,
        long: -104.959770,
        attributes: ["Pictures", "Shopping", "Learning"],
        url: "https://www.botanicgardens.org/",
        description: "The Denver Botanic Gardens is a public botanical garden located in the Cheesman Park neighborhood of Denver, Colorado. The 23-acre park contains a conservatory, a variety of theme gardens and a sunken amphitheater, which hosts various concerts in the summer.",
        advice: "",
        img: "",
    },
    {
        name: "Water World",
        catagory: "Entertainment",
        rating: 3.00,
        time: 5.00,
        drive: 5,
        address: "8801 N Pecos St, Federal Heights, CO 80260",
        lat: 39.855901,
        long: -105.00994200,
        attributes: ["Entertainment", "Shopping", "Pictures"],
        url: "https://www.waterworldcolorado.com/",
        description: "Water World is a water park that is part of the Hyland Hills Park and Recreation District and located in Federal Heights, Colorado, roughly 10 miles north of downtown Denver, Colorado. The park first opened in 1979 with the first two waterslides in the state of Colorado.",
        advice: "",
        img: "",
    },
    {
        name: "First Ever Chipolte",
        catagory: "Dinning",
        rating: 3.25,
        time: 1.00,
        drive: 15,
        address: "1644 E Evans Ave, Denver, CO 80210",
        lat: 39.6782867,
        long: -104.96780360000002,
        attributes: ["Food", "Shopping", "Pictures"],
        url: "https://www.westword.com/restaurants/the-original-chipotle-location-at-1644-west-evans-will-close-for-remodel-on-may-18-2017-9064672",
        description: "The story of Chipotle began in 1993, when a young chef named Steve Ells opened a tiny burrito joint at 1644 East Evans Avenue, in a former Dolly Madison ice cream shop. Back then, Ells did everything from grill meats to assemble burritos to balance the books; the shop closed on holidays because those were the only days off he ever got.",
        advice: "Don't be surpised with how small the location is",
        img: "",
    },
    {
        name: "Illegal Peats",
        catagory: "Dinning",
        rating: 3.00,
        time: 1.00,
        drive: 15,
        address: "2001 E Colfax Ave, Denver, CO 80206",
        lat: 39.74024120000001,
        long: -104.96327659999997,
        attributes: ["Food", "Shopping", "Pictures"],
        url: "https://www.illegalpetes.com/",
        description: "The story: We celebrate humanity. We celebrate individuality. We celebrate relationships and connections. And most importantly, we celebrate every human’s need for tasty food, stiff drinks and good times. Well, maybe it’s not a need, but it’s certainly a want. Either way, it’s our desire to make each Illegal Pete’s location the kind of place where you can go to celebrate more with other humans.",
        advice: "Yummm more borito bowls",
        img: "",
    },
    {
        name: "Coors Brewery Tour",
        catagory: "Entertainment",
        rating: 4.00,
        time: 3.00,
        drive: 35,
        address: "13th St & Ford Street, Golden, CO 80401",
        lat: 39.75507899999999,
        long: -105.21793500000001,
        attributes: ["Drinking", "Shopping", "Pictures"],
        url: "https://www.visitgolden.com/places-to-go/coors-brewery-tour/",
        description: "Expansive, renowned brewery offers free tours, as well as tastings & a gift shop.",
        advice: "Check times on website",
        img: "",
    },
    



];

db.Events
    .remove({})
    .then(() => db.Events.collection.insertMany(eventSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
