class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

const assert = require("chai").assert;

describe("Softunify", function(){

    it("initialization test", function () {
        let softunify = new SoftUniFy();
        let expected = 0;
        let actual = Object.keys(softunify.allSongs).length;

        assert.equal(actual, expected);
    });

    it("downloadSong test", function(){
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = "Venom - Knock, Knock let the devil in...";
        const actual = softunify.songsList;

        assert.equal(actual, expected);
    });

    it("playSong test", function(){
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
    });

    it('playSong test 1', function () {
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = 'Eminem:\nVenom - Knock, Knock let the devil in...\n';
        const actual = softunify.playSong('Venom');

        assert.equal(actual, expected);
    });

    it('playSong test 2', function () {
        let softunify = new SoftUniFy();
        const expected = `You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!`;
        const actual = softunify.playSong('Venom');

        assert.equal(actual, expected);
    });

    it('songsList should return the correct string when it is empty', function () {
        let softunify = new SoftUniFy();
        const expected = 'Your song list is empty';
        const actual = softunify.songsList;

        assert.equal(actual, expected);
    });

    it('songsList should return all songs when it is not empty', function () {
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

        const expected = 'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...';
        const actual = softunify.songsList;

        assert.equal(actual, expected);
    });

    it('rateArtist should return the correct string when artist is not found', function () {
        let softunify = new SoftUniFy();
        const expected = 'The Eminem is not on your artist list.';
        const actual = softunify.rateArtist('Eminem');

        assert.equal(actual, expected);
    });

    it('rateArtist should return 0 when the second argument is NaN', function () {
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = 0;
        const actual = softunify.rateArtist('Eminem', []);

        assert.equal(actual, expected);
    });

    it('rateArtist should calculate the rate of the artist correctly', function () {
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');

        const expected = 50;
        const actual = softunify.rateArtist('Eminem', 50);

        assert.equal(actual, expected);
    });

});

