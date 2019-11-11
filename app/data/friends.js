var friends = [
    {
        name: "SpongeBob",
        photo: "https://www.google.com/url?sa=i&source=imgres&cd=&ved=2ahUKEwjuuLqRh9vlAhUxnq0KHVkNCe0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F502503270894221343%2F&psig=AOvVaw2U7irjRab6gwDY3MDRjEQL&ust=1573317656019874",
        score: [5, 4, 3, 2, 1, 4, 5, 3, 2, 1]
    
    },
    {
        name: "Dwight",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiCrpT_mdvlAhVFQq0KHeLTA-UQjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDwight_Schrute&psig=AOvVaw0VvIecbBO79QQVpe4cp9at&ust=1573322714012981",
        score: [2, 4, 3, 2, 4, 3, 1, 3, 4, 5]
    },
    {
        name: "Dre",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwigz7_Vrd3lAhUDlKwKHYddDtkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.charactour.com%2Fhub%2Fcharacters%2Fview%2FAndre-Dre-Johnson-Sr.Blackish&psig=AOvVaw1r-aLOoj_ZGCD0B5eyfjpF&ust=1573396695290684",
        score: [3, 2, 4, 5, 1, 2, 3, 4, 2, 1]
    },
    {
        name: "Katie", 
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwizivqKst3lAhUOOq0KHeUSDqYQjRx6BAgBEAQ&url=https%3A%2F%2Famericanhousewife.fandom.com%2Fwiki%2FKatie_Otto&psig=AOvVaw0VaSF7tcHeAaXxg7mg939P&ust=1573397892212742",
        score: [4, 1, 2, 3, 5, 1, 2, 3, 5, 5]
    },
    {
        name: "Joan",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiptLiCu93lAhUE16wKHby7ChIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tumblr.com%2Ftagged%2Fjoan%2Bclayton%2Bgirlfriends&psig=AOvVaw0Z23qz5KX1hYuRpnnlBslJ&ust=1573400281156983",
        score: [5, 3, 4, 4, 5, 2, 5, 4, 2, 1],
    },
    {
        name: "Eleanor",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwianKvIu93lAhVPgK0KHfmTAkIQjRx6BAgBEAQ&url=https%3A%2F%2Fkristenbell.fandom.com%2Fwiki%2FEleanor_Shellstrop&psig=AOvVaw2RfJaHYpFvehr7TTCzYyYP&ust=1573400448733016",
        score: [1, 2, 3, 2, 1, 3, 2, 4, 5, 1]
    },
    {
        name: "George",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D544309855720341&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FGeorgeLopezTVShow%2F&docid=5bbHPFLgpTXUXM&tbnid=D2J--SeIO2tseM%3A&vet=10ahUKEwinvNaIwt3lAhUCS6wKHWJ8DTUQMwibASgVMBU..i&w=400&h=400&bih=789&biw=1440&q=george%20lopez&ved=0ahUKEwinvNaIwt3lAhUCS6wKHWJ8DTUQMwibASgVMBU&iact=mrc&uact=8",
        score: [2, 5, 4, 3, 1, 4, 4, 3, 5, 1]
    },
    {
        name: "Constance",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwir5sCTw93lAhVDT6wKHWoMDbAQjRx6BAgBEAQ&url=https%3A%2F%2Fabc.com%2Fshows%2Ffresh-off-the-boat%2Fcast%2Fjessica-huang&psig=AOvVaw35Er07cFas7iy7vrcONEZU&ust=1573402469495598",
        score: [1, 3, 4, 2, 5, 5, 3, 1, 2, 2]

    },
    {
        name: "Hank",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj2htm2luHlAhWEZd8KHZxECnUQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fchicagofire.fandom.com%252Fwiki%252FHank_Voight%26psig%3DAOvVaw1q-CHhI_-NW3qR0SL2Xy1n%26ust%3D1573527911761753&psig=AOvVaw1q-CHhI_-NW3qR0SL2Xy1n&ust=1573527911761753",
        score: [1, 2, 2, 4, 5, 3, 2, 5, 3, 3]
    },
    {
        name: "Raven", 
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwinkIjel-HlAhXPJt8KHfRMCoIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.refinery29.com%2Fen-us%2F2017%2F08%2F167573%2Fraven-symone-ravens-home-crazy-interview&psig=AOvVaw2mKoxP9uZWPQlvxGJINXPe&ust=1573528230648384",
        score: [3, 5, 5, 4, 5, 4, 5, 4, 5, 5,]
    }
]

module.exports = friends