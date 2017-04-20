/*

    /wrestlers/<name>-<#id>.html

    path to content
    .content-wrapper
        .content
            div
                h1 Fighter Name
                [a, -, a, -, ...] lots of different links for things like Facts & Stats etc.
                table
                    tbody
                        tr
                            td
                                div.image-style
                                    a Absolute link to profile pic location
                                        img hosted profile pic relative link to location
                            td Name:<Fighter Actual Name>
                            td Preferred Name: <Stage Name>
                        tr
                            td Dob: Date
                            td Pob: Date
                        tr
                            td Nationality: Country
                            td Gender: Male, probably
                        tr
                            td Matches: Number
                        tr
                            td Ring Names: Lots o' 
                        tr ? place holder rows?
                        tr ?
                div.table.green Green seems to be cards
                    h2
                        img GreenArrow
                        Fighter Name(again)
                    [a, -, a, -, ...] lots of different filter links for Promotion Search (affects  table below -> clicking returns to server with refreshed page + table content)
                    br
                    [a, -, a, -, ...] lots of different links for filtering Year (affects  table below -> clicking returns to server with refreshed page + table content)
                    br
                    Matches shown [a, -, a, -, ...] Results per Page [a,-,...] Sort [a,-,...] Title Matches: [a,-,...]
                    div.table-wrapper
                        table
                            tbody
                                tr.head Header stuff, we dont care about it
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
'use strict'

class Fighter {
    constructor () {
        this.fightername= '';
        this.birthname= '';
        this.preferredname= '';
        this.dob= '';
        this.pob= '';
        this.nation= '';
        this.gender= '';
        this.matches= 0;
        this.ringnames= [];
        this.links= [];
    }
}