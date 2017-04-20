/*
    [
        td
            img National Flag
            a (link to Match page) Title of match
            br
            Date of match
        td
            optionally [a (link to fighter) Fighter name]
            optionally strong
                            font[color=brown] Fighter Name
        td Result of Match
        td
            optionally [a (link to fighter) Fighter name]
            optionally strong
                            font[color=brown] Fighter Name
        td Match Type
        td Title optionally [br, Title, ...]
    ]

*/

class Card {
    constructor () {
        this.matchtitle = '';
        this.dateofmatch = '';
        this.homefighters = [];
        this.awayfighters = [];
        this.result = '';
        this.matchtype = '';
        this.title = '';
    }
}