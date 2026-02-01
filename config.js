// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Jessucy",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I'm the luckiest man in the world! Because you are my woman! 🎉💝💖💝💓",
        message: "Now come visit Cali to claim your gift, a big hug and a cheeky kiss ;)",
        emojis: "💖❤️❤️❤️❤️❤️"  // These will bounce around
    },

    // NEW: Photo Gallery Configuration
    // Add your special photos to the third page
    photos: {
        enabled: true,  // Set to false to hide photo gallery
        images: [
            // Add your photos here
            // Example format:
            {
                url: "https://ramzizo2002.github.io/valentine-website-2026/images/First Date.JPG",
                caption: "Our first date 💕"
            },
            {
                url: "https://ramzizo2002.github.io/valentine-website-2026/images/That special moment.png",
                caption: "That special moment 💖"
            },
            {
                url: "https://ramzizo2002.github.io/valentine-website-2026/images/Always Together.png",
                caption: "Always together 💝"
            },
            {
                url: "https://ramzizo2002.github.io/valentine-website-2026/images/Favorite Memory.jpg",
                caption: "My favorite memory ❤️"
            },
            {
                url: "https://ramzizo2002.github.io/valentine-website-2026/images/first valentine.png",
                caption: "My first valentine ❤️"
            },
            {
                url: "https://ramzizo2002.github.io/valentine-website-2026/images/Gemini_Generated_Image_6hynry6hynry6hyn.png",
                caption: "My Last valentine ❤️"
            }
            // To add your own photos:
            // 1. Upload photos to an image hosting service like Imgur, Cloudinary, or GitHub
            // 2. Copy the direct image URL
            // 3. Replace the placeholder URLs above with your photo URLs
            // 4. Update the captions to match your memories
            // 
            // You can add as many photos as you want!
        ]
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffa07a",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#87ceeb",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#d2691e"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://ramzizo2002.github.io/valentine-website-2026/images/Foreigner - I Want to Know What Love Is (Lyrics) 4.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
