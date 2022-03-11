
class Game {
    /**
     * Location of the game and what is the solution to the game.
     * @param location
     * @param solution
     */
     constructor(location, solution) {
        this.location = location;
        this.solution = solution;
    }
    /**
     * The location of the game. 
     * @return the location of the game.
     */
    getLocation() {
        return location;
        //return URL String
    }

    /**
     * @return The solution of the game.
     */
    getSolution() {
        return solution;
        //return int
    }

}

module.exports = Game;