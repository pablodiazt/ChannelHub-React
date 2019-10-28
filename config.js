const express = require('express');

module.exports = {
    mongoURI: "mongodb://127.0.0.1/test",
    secretOrKey: "this-super-secret-key",
    noembed: {
	all: [
	    {
		patterns: [
		    "http://www\\.clickhole\\.com/[^/]+/[^/]?"
		],
		"name": "Clickhole"
	    },
	    {
		"name": "CloudApp",
		patterns: [
		    "http://cl\\.ly/(?:image/)?[0-9a-zA-Z]+/?$"
		]
	    },
	    {
		"name": "Boing Boing",
		patterns: [
		    "http://boingboing\\.net/\\d{4}/\\d{2}/\\d{2}/[^/]+\\.html"
		]
	    },
	    {
		patterns: [
		    "https?://path\\.com/p/([0-9a-zA-Z]+)$"
		],
		"name": "Path"
	    },
	    {
		patterns: [
		    "https?://(?:www\\.)?avclub\\.com/article/[^/]+/?$"
		],
		"name": "The AV Club"
	    },
	    {
		"name": "Spreaker",
		patterns: [
		    "https?://(?:www\\.)spreaker\\.com/.+"
		]
	    },
	    {
		patterns: [
		    "https?://www\\.nooledge\\.com/\\!/Vid/.+",
		    "https?://v\\.nldg\\.me/.+"
		],
		"name": "Nooledge"
	    },
	    {
		patterns: [
		    "https?://soundcloud.com/.*/.*"
		],
		"name": "SoundCloud"
	    },
	    {
		"name": "Twitter",
		patterns: [
		    "https?://(?:www|mobile\\.)?twitter\\.com/(?:#!/)?([^/]+)/status(?:es)?/(\\d+)"
		]
	    },
	    {
		"name": "Urban Dictionary",
		patterns: [
		    "http://www\\.urbandictionary\\.com/define\\.php\\?term=.+"
		]
	    },
	    {
		"name": "Vimeo",
		patterns: [
		    "https?://(?:www\\.)?vimeo\\.com/.+"
		]
	    },
	    {
		"name": "iTunes Movie Trailers",
		patterns: [
		    "http://trailers\\.apple\\.com/trailers/[^/]+/[^/]+"
		]
	    },
	    {
		"name": "ASCII Art Farts",
		patterns: [
		    "http://www\\.asciiartfarts\\.com/[0-9]+\\.html"
		]
	    },
	    {
		"name": "Monoprice",
		patterns: [
		    "http://www\\.monoprice\\.com/products/product\\.asp\\?.*p_id=\\d+"
		]
	    },
	    {
		patterns: [
		    "http://(?:www\\.)?theverge\\.com/\\d{4}/\\d{1,2}/\\d{1,2}/\\d+/[^/]+/?$"
		],
		"name": "The Verge"
	    },
	    {
		patterns: [
		    "http://www.traileraddict.com/trailer/[^/]+/trailer"
		],
		"name": "TrailerAddict"
	    },
	    {
		patterns: [
		    "http://www\\.duffelblog\\.com/\\d{4}/\\d{1,2}/[^/]+/?$"
		],
		"name": "The Duffel Blog"
	    },
	    {
		patterns: [
		    "https?://(?:www\\.)?wired\\.com/([^/]+/)?\\d+/\\d+/[^/]+/?$"
		],
		"name": "Wired"
	    },
	    {
		"name": "VICE",
		patterns: [
		    "https?://(?:www\\.)?vice\\.com/[^/]+/?"
		]
	    },
	    {
		"name": "Qik",
		patterns: [
		    "http://qik\\.com/video/.*"
		]
	    },
	    {
		"name": "XKCD",
		patterns: [
		    "http://(?:www\\.)?xkcd\\.com/\\d+/?"
		]
	    },
	    {
		patterns: [
		    "https?://(?:www.)?skitch.com/([^/]+)/[^/]+/.+",
		    "http://skit.ch/[^/]+"
		],
		"name": "Skitch"
	    },
	    {
		patterns: [
		    "http://lockerz\\.com/[sd]/\\d+"
		],
		"name": "Lockerz"
	    },
	    {
		patterns: [
		    "http://gfycat\\.com/([a-zA-Z]+)"
		],
		"name": "Gfycat"
	    },
	    {
		patterns: [
		    "http://picplz\\.com/user/[^/]+/pic/[^/]+"
		],
		"name": "Picplz"
	    },
	    {
		"name": "Twitpic",
		patterns: [
		    "http://(?:www\\.)?twitpic\\.com/([^/]+)"
		]
	    },
	    {
		patterns: [
		    "http://www\\.twitlonger\\.com/show/[a-zA-Z0-9]+",
		    "http://tl\\.gd/[^/]+"
		],
		"name": "Twitlonger"
	    },
	    {
		"name": "Ars Technica",
		patterns: [
		    "http://arstechnica\\.com/[^/]+/\\d+/\\d+/[^/]+/?$"
		]
	    },
	    {
		patterns: [
		    "http://www\\.theonion\\.com/articles?/[^/]+/?"
		],
		"name": "The Onion"
	    },
	    {
		patterns: [
		    "https?://news.vice\\.com/[^/]+/?"
		],
		"name": "VICE News"
	    },
	    {
		"name": "oEmbed",
		patterns: [
		    "https?://www\\.23hq\\.com/.*/photo/.*",
		    "https?://alpha\\.app\\.net/.*/post/.*",
		    "https?://photos\\.app\\.net/.*/.*",
		    "https?://live\\.amcharts\\.com/.*",
		    "https?://www\\.animatron\\.com/project/.*",
		    "https?://animatron\\.com/project/.*",
		    "https?://animoto\\.com/play/.*",
		    "https?://www\\.audiomack\\.com/song/.*",
		    "https?://www\\.audiomack\\.com/album/.*",
		    "https?://www\\.audiomack\\.com/playlist/.*",
		    "https?://audiosnaps\\.com/k/.*",
		    "https?://blackfire\\.io/profiles/.*/graph",
		    "https?://blackfire\\.io/profiles/compare/.*/graph",
		    "https?://buttondown\\.email/.*",
		    "https?://cacoo\\.com/diagrams/.*",
		    "https?://carbonhealth\\.com/practice/.*",
		    "https?://img\\.catbo\\.at/.*",
		    "https?://public\\.chartblocks\\.com/c/.*",
		    "https?://chirb\\.it/.*",
		    "https?://www\\.circuitlab\\.com/circuit/.*",
		    "https?://www\\.clipland\\.com/v/.*",
		    "https?://www\\.clipland\\.com/v/.*",
		    "https?://clyp\\.it/.*",
		    "https?://clyp\\.it/playlist/.*",
		    "https?://codepen\\.io/.*",
		    "https?://codepen\\.io/.*",
		    "https?://codepoints\\.net/.*",
		    "https?://codepoints\\.net/.*",
		    "https?://www\\.codepoints\\.net/.*",
		    "https?://www\\.codepoints\\.net/.*",
		    "https?://codesandbox\\.io/s/.*",
		    "https?://codesandbox\\.io/embed/.*",
		    "https?://www\\.collegehumor\\.com/video/.*",
		    "https?://commaful\\.com/play/.*",
		    "https?://coub\\.com/view/.*",
		    "https?://coub\\.com/embed/.*",
		    "https?://crowdranking\\.com/.*/.*",
		    "https?://staging\\.cyranosystems\\.com/msg/.*",
		    "https?://app\\.cyranosystems\\.com/msg/.*",
		    "https?://www\\.dailymile\\.com/people/.*/entries/.*",
		    "https?://www\\.dailymotion\\.com/video/.*",
		    "https?://.*\\.deviantart\\.com/art/.*",
		    "https?://.*\\.deviantart\\.com/.*#/d.*",
		    "https?://fav\\.me/.*",
		    "https?://sta\\.sh/.*",
		    "https?://.*\\.didacte\\.com/a/course/.*",
		    "https?://www\\.dipity\\.com/.*/.*/",
		    "https?://.*\\.docdroid\\.net/.*",
		    "https?://.*\\.docdroid\\.net/.*",
		    "https?://docdro\\.id/.*",
		    "https?://docdro\\.id/.*",
		    "https?://docs\\.com/.*",
		    "https?://www\\.docs\\.com/.*",
		    "https?://dotsub\\.com/view/.*",
		    "https?://edocr\\.com/docs/.*",
		    "https?://egliseinfo\\.catholique\\.fr/.*",
		    "https?://embedarticles\\.com/.*",
		    "https?://eyrie\\.io/board/.*",
		    "https?://eyrie\\.io/sparkfun/.*",
		    "https?://www\\.facebook\\.com/.*/videos/.*",
		    "https?://www\\.facebook\\.com/video\\.php",
		    "https?://flat\\.io/score/.*",
		    "https?://.*\\.flat\\.io/score/.*",
		    "https?://.*\\.flickr\\.com/photos/.*",
		    "https?://flic\\.kr/p/.*",
		    "https?://fiso\\.foxsports\\.com\\.au/isomorphic-widget/.*",
		    "https?://fiso\\.foxsports\\.com\\.au/isomorphic-widget/.*",
		    "https?://framebuzz\\.com/v/.*",
		    "https?://framebuzz\\.com/v/.*",
		    "https?://www\\.funnyordie\\.com/videos/.*",
		    "https?://.*\\.geograph\\.org\\.uk/.*",
		    "https?://.*\\.geograph\\.co\\.uk/.*",
		    "https?://.*\\.geograph\\.ie/.*",
		    "https?://.*\\.wikimedia\\.org/.*_geograph\\.org\\.uk_.*",
		    "https?://.*\\.geograph\\.org\\.gg/.*",
		    "https?://.*\\.geograph\\.org\\.je/.*",
		    "https?://channel-islands\\.geograph\\.org/.*",
		    "https?://channel-islands\\.geographs\\.org/.*",
		    "https?://.*\\.channel\\.geographs\\.org/.*",
		    "https?://geo-en\\.hlipp\\.de/.*",
		    "https?://geo\\.hlipp\\.de/.*",
		    "https?://germany\\.geograph\\.org/.*",
		    "https?://gty\\.im/.*",
		    "https?://gfycat\\.com/.*",
		    "https?://www\\.gfycat\\.com/.*",
		    "https?://gfycat\\.com/.*",
		    "https?://www\\.gfycat\\.com/.*",
		    "https?://giphy\\.com/gifs/.*",
		    "https?://gph\\.is/.*",
		    "https?://media\\.giphy\\.com/media/.*/giphy\\.gif",
		    "https?://gyazo\\.com/.*",
		    "https?://huffduffer\\.com/.*/.*",
		    "https?://www\\.hulu\\.com/watch/.*",
		    "https?://www\\.ifixit\\.com/Guide/View/.*",
		    "https?://ifttt\\.com/recipes/.*",
		    "https?://player\\.indacolive\\.com/player/jwp/clients/.*",
		    "https?://infogr\\.am/.*",
		    "https?://www\\.inoreader\\.com/oembed/",
		    "https?://.*\\.inphood\\.com/.*",
		    "https?://instagram\\.com/p/.*",
		    "https?://instagr\\.am/p/.*",
		    "https?://www\\.instagram\\.com/p/.*",
		    "https?://www\\.instagr\\.am/p/.*",
		    "https?://instagram\\.com/p/.*",
		    "https?://instagr\\.am/p/.*",
		    "https?://www\\.instagram\\.com/p/.*",
		    "https?://www\\.instagr\\.am/p/.*",
		    "https?://www\\.isnare\\.com/.*",
		    "https?://www\\.kickstarter\\.com/projects/.*",
		    "https?://www\\.kidoju\\.com/en/x/.*/.*",
		    "https?://www\\.kidoju\\.com/fr/x/.*/.*",
		    "https?://kit\\.com/.*/.*",
		    "https?://kit\\.com/.*/.*",
		    "https?://www\\.kitchenbowl\\.com/recipe/.*",
		    "https?://jdr\\.knacki\\.info/meuh/.*",
		    "https?://jdr\\.knacki\\.info/meuh/.*",
		    "https?://learningapps\\.org/.*",
		    "https?://mathembed\\.com/latex\\?inputText=.*",
		    "https?://mathembed\\.com/latex\\?inputText=.*",
		    "https?://me\\.me/i/.*",
		    "https?://meetup\\.com/.*",
		    "https?://meetu\\.ps/.*",
		    "https?://www\\.mixcloud\\.com/.*/.*/",
		    "https?://www\\.mobypicture\\.com/user/.*/view/.*",
		    "https?://moby\\.to/.*",
		    "https?://beta\\.modelo\\.io/embedded/.*",
		    "https?://mybeweeg\\.com/w/.*",
		    "https?://.*\\.nanoo\\.tv/link/.*",
		    "https?://nanoo\\.tv/link/.*",
		    "https?://.*\\.nanoo\\.pro/link/.*",
		    "https?://nanoo\\.pro/link/.*",
		    "https?://.*\\.nanoo\\.tv/link/.*",
		    "https?://nanoo\\.tv/link/.*",
		    "https?://.*\\.nanoo\\.pro/link/.*",
		    "https?://nanoo\\.pro/link/.*",
		    "https?://.*\\.nfb\\.ca/film/.*",
		    "https?://www\\.odds\\.com\\.au/.*",
		    "https?://odds\\.com\\.au/.*",
		    "https?://mix\\.office\\.com/watch/.*",
		    "https?://mix\\.office\\.com/embed/.*",
		    "https?://official\\.fm/tracks/.*",
		    "https?://official\\.fm/playlists/.*",
		    "https?://on\\.aol\\.com/video/.*",
		    "https?://orbitvu\\.co/001/.*/ov3601/view",
		    "https?://orbitvu\\.co/001/.*/ov3601/.*/view",
		    "https?://orbitvu\\.co/001/.*/ov3602/.*/view",
		    "https?://orbitvu\\.co/001/.*/2/orbittour/.*/view",
		    "https?://orbitvu\\.co/001/.*/1/2/orbittour/.*/view",
		    "https?://orbitvu\\.co/001/.*/ov3601/view",
		    "https?://orbitvu\\.co/001/.*/ov3601/.*/view",
		    "https?://orbitvu\\.co/001/.*/ov3602/.*/view",
		    "https?://orbitvu\\.co/001/.*/2/orbittour/.*/view",
		    "https?://orbitvu\\.co/001/.*/1/2/orbittour/.*/view",
		    "https?://www\\.oumy\\.com/v/.*",
		    "https?://pastery\\.net/.*",
		    "https?://pastery\\.net/.*",
		    "https?://www\\.pastery\\.net/.*",
		    "https?://www\\.pastery\\.net/.*",
		    "https?://store\\.pixdor\\.com/place-marker-widget/.*/show",
		    "https?://store\\.pixdor\\.com/map/.*/show",
		    "https?://.*\\.polldaddy\\.com/s/.*",
		    "https?://.*\\.polldaddy\\.com/poll/.*",
		    "https?://.*\\.polldaddy\\.com/ratings/.*",
		    "https?://app\\.sellwithport\\.com/#/buyer/.*",
		    "https?://portfolium\\.com/entry/.*",
		    "https?://www\\.punters\\.com\\.au/.*",
		    "https?://punters\\.com\\.au/.*",
		    "https?://www\\.quiz\\.biz/quizz-.*\\.html",
		    "https?://www\\.quizz\\.biz/quizz-.*\\.html",
		    "https?://rapidengage\\.com/s/.*",
		    "https?://reddit\\.com/r/.*/comments/.*/.*",
		    "https?://rwire\\.com/.*",
		    "https?://repubhub\\.icopyright\\.net/freePost\\.act\\?.*",
		    "https?://www\\.reverbnation\\.com/.*",
		    "https?://www\\.reverbnation\\.com/.*/songs/.*",
		    "https?://roomshare\\.jp/post/.*",
		    "https?://roomshare\\.jp/en/post/.*",
		    "https?://videos\\.sapo\\.pt/.*",
		    "https?://console\\.screen9\\.com/.*",
		    "https?://.*\\.screen9\\.tv/.*",
		    "https?://www\\.screenr\\.com/.*/",
		    "https?://www\\.scribblemaps\\.com/maps/view/.*",
		    "https?://www\\.scribblemaps\\.com/maps/view/.*",
		    "https?://scribblemaps\\.com/maps/view/.*",
		    "https?://scribblemaps\\.com/maps/view/.*",
		    "https?://www\\.scribd\\.com/doc/.*",
		    "https?://www\\.shortnote\\.jp/view/notes/.*",
		    "https?://shoudio\\.com/.*",
		    "https?://shoud\\.io/.*",
		    "https?://showtheway\\.io/to/.*",
		    "https?://.*\\.silk\\.co/explore/.*",
		    "https?://.*\\.silk\\.co/explore/.*",
		    "https?://.*\\.silk\\.co/s/embed/.*",
		    "https?://.*\\.silk\\.co/s/embed/.*",
		    "https?://onsizzle\\.com/i/.*",
		    "https?://sketchfab\\.com/models/.*",
		    "https?://sketchfab\\.com/models/.*",
		    "https?://sketchfab\\.com/.*/folders/.*",
		    "https?://www\\.slideshare\\.net/.*/.*",
		    "https?://fr\\.slideshare\\.net/.*/.*",
		    "https?://de\\.slideshare\\.net/.*/.*",
		    "https?://es\\.slideshare\\.net/.*/.*",
		    "https?://pt\\.slideshare\\.net/.*/.*",
		    "https?://.*\\.smugmug\\.com/.*",
		    "https?://www\\.socialexplorer\\.com/.*/explore",
		    "https?://www\\.socialexplorer\\.com/.*/view",
		    "https?://www\\.socialexplorer\\.com/.*/edit",
		    "https?://www\\.socialexplorer\\.com/.*/embed",
		    "https?://soundcloud\\.com/.*",
		    "https?://play\\.soundsgood\\.co/playlist/.*",
		    "https?://soundsgood\\.co/playlist/.*",
		    "https?://speakerdeck\\.com/.*/.*",
		    "https?://speakerdeck\\.com/.*/.*",
		    "https?://.*\\.spreaker\\.com/.*",
		    "https?://.*\\.spreaker\\.com/.*",
		    "https?://streamable\\.com/.*",
		    "https?://streamable\\.com/.*",
		    "https?://content\\.streamonecloud\\.net/embed/.*",
		    "https?://www\\.sutori\\.com/story/.*",
		    "https?://sway\\.com/.*",
		    "https?://www\\.sway\\.com/.*",
		    "https?://ted\\.com/talks/.*",
		    "https?://www\\.nytimes\\.com/svc/oembed",
		    "https?://nytimes\\.com/.*",
		    "https?://.*\\.nytimes\\.com/.*",
		    "https?://theysaidso\\.com/image/.*",
		    "https?://www\\.tickcounter\\.com/countdown/.*",
		    "https?://www\\.tickcounter\\.com/countup/.*",
		    "https?://www\\.tickcounter\\.com/ticker/.*",
		    "https?://www\\.tickcounter\\.com/worldclock/.*",
		    "https?://www\\.tickcounter\\.com/countdown/.*",
		    "https?://www\\.tickcounter\\.com/countup/.*",
		    "https?://www\\.tickcounter\\.com/ticker/.*",
		    "https?://www\\.tickcounter\\.com/worldclock/.*",
		    "https?://www\\.topy\\.se/image/.*",
		    "https?://clips\\.twitch\\.tv/.*",
		    "https?://clips\\.twitch\\.tv/.*",
		    "https?://www\\.twitch\\.tv/.*",
		    "https?://www\\.twitch\\.tv/.*",
		    "https?://twitch\\.tv/.*",
		    "https?://twitch\\.tv/.*",
		    "https?://twitter\\.com/.*/status/.*",
		    "https?://player\\.ubideo\\.com/.*",
		    "https?://.*\\.uol\\.com\\.br/view/.*",
		    "https?://.*\\.uol\\.com\\.br/video/.*",
		    "https?://.*\\.ustream\\.tv/.*",
		    "https?://.*\\.ustream\\.com/.*",
		    "https?://www\\.utposts\\.com/products/.*",
		    "https?://www\\.utposts\\.com/products/.*",
		    "https?://utposts\\.com/products/.*",
		    "https?://utposts\\.com/products/.*",
		    "https?://uttles\\.com/uttle/.*",
		    "https?://veer\\.tv/videos/.*",
		    "https?://veervr\\.tv/videos/.*",
		    "https?://www\\.vevo\\.com/.*",
		    "https?://www\\.vevo\\.com/.*",
		    "https?://www\\.videojug\\.com/film/.*",
		    "https?://www\\.videojug\\.com/interview/.*",
		    "https?://vidl\\.it/.*",
		    "https?://vimeo\\.com/.*",
		    "https?://vimeo\\.com/album/.*/video/.*",
		    "https?://vimeo\\.com/channels/.*/.*",
		    "https?://vimeo\\.com/groups/.*/videos/.*",
		    "https?://vimeo\\.com/ondemand/.*/.*",
		    "https?://player\\.vimeo\\.com/video/.*",
		    "https?://vlipsy\\.com/.*",
		    "https?://.*\\.wiredrive\\.com/.*",
		    "https?://.*\\.wizer\\.me/learn/.*",
		    "https?://.*\\.wizer\\.me/learn/.*",
		    "https?://.*\\.wizer\\.me/preview/.*",
		    "https?://.*\\.wizer\\.me/preview/.*",
		    "https?://.*\\.yfrog\\.com/.*",
		    "https?://yfrog\\.us/.*",
		    "https?://reports\\.zoho\\.com/ZDBDataSheetView\\.cc\\?OBJID=1432535000000003002&STANDALONE=true&INTERVAL=120&DATATYPESYMBOL=false&REMTOOLBAR=false&SEARCHBOX=true&INCLUDETITLE=true&INCLUDEDESC=true&SHOWHIDEOPT=true"
		]
	    },
	    {
		name: "Vine",
		patterns: [
		    "https?://vine.co/v/[a-zA-Z0-9]+"
		]
	    },
	    {
		patterns: [
		    "https?://muki\\.io/(embed/)?(.+)"
		],
		name: "Muki"
	    },
	    {
		patterns: [
		    "https?://imgur\\.com/(?:[^\\/]+/)?[0-9a-zA-Z]+$"
		],
		name: "Imgur"
	    },
	    {
		patterns: [
		    "https?://www\\.(dropbox\\.com/s/.+\\.(?:jpg|png|gif))",
		    "https?://db\\.tt/[a-zA-Z0-9]+"
		],
		name: "Dropbox"
	    },
	    {
		patterns: [
		    "https://tube.switch.ch/videos/([a-z0-9]+)"
		],
		name: "SWITCHTube"
	    },
	    {
		patterns: [
		    "http://www\\.amazon\\.com/(?:.+/)?[gd]p/(?:product/)?(?:tags-on-product/)?([a-zA-Z0-9]+)",
		    "http://amzn\\.com/([^/]+)"
		],
		name: "Amazon"
	    },
	    {
		name: "Bash.org",
		patterns: [
		    "http://bash\\.org/\\?(\\d+)"
		]
	    },
	    {
		name: "GiantBomb",
		patterns: [
		    "https?://www\\.giantbomb\\.com/videos/[^/]+/\\d+-\\d+/?"
		]
	    },
	    {
		name: "GlobalGiving",
		patterns: [
		    "https?://www\\.globalgiving\\.org/((micro)?projects|funds)/.*"
		]
	    },
	    {
		patterns: [
		    "https?://(?:[^\\.]+\\.)?youtube\\.com/watch/?\\?(?:.+&)?v=([^&]+)",
		    "https?://(?:[^\\.]+\\.)?(?:youtu\\.be|youtube\\.com/embed)/([a-zA-Z0-9_-]+)"
		],
		name: "YouTube"
	    }
	],
	reactPlayer: [
	    "https?://(?:[^\\.]+\\.)?youtube\\.com/watch/?\\?(?:.+&)?v=([^&]+)",
	    "https?://(?:[^\\.]+\\.)?(?:youtu\\.be|youtube\\.com/embed)/([a-zA-Z0-9_-]+)",
	    "https?://www\\.facebook\\.com/.*/videos/.*",
	    "https?://www\\.facebook\\.com/video\\.php",
	    "https?://clips\\.twitch\\.tv/.*",
	    "https?://clips\\.twitch\\.tv/.*",
	    "https?://www\\.twitch\\.tv/.*",
	    "https?://www\\.twitch\\.tv/.*",
	    "https?://twitch\\.tv/.*",
	    "https?://twitch\\.tv/.*",
	    "https?://soundcloud.com/.*/.*",
	    "https?://(?:www\\.)?vimeo\\.com/.+",
	    "https?://vimeo\\.com/.*",
	    "https?://vimeo\\.com/album/.*/video/.*",
	    "https?://vimeo\\.com/channels/.*/.*",
	    "https?://vimeo\\.com/groups/.*/videos/.*",
	    "https?://vimeo\\.com/ondemand/.*/.*",
	    "https?://player\\.vimeo\\.com/video/.*",
	    "https?://streamable\\.com/.*",
	    "https?://www\\.mixcloud\\.com/.*/.*/"
	],
	twitter: "https?://(?:www|mobile\\.)?twitter\\.com/(?:#!/)?([^/]+)/status(?:es)?/(\\d+)"
    }
};
