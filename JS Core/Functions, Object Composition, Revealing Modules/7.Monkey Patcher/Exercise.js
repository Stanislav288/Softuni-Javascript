function exercise() {
    let solution = {
        call: function (post, command) {
            if (command === 'upvote') {
                post[command]++;
            } else if (command === 'downvote') {
                post[command]++;
            } else if (command === 'score') {
                let upvotes = post['upvotes'];
                let downvotes = post['downvote'];
                let inflatedUpvotes = Math.ceil(1.25 * post[upvotes]);
                let inflatedDownvotes = Math.ceil(1.25 * post[downvotes]);
                let balance = inflatedUpvotes - dinflatedDownvotes;
                let rating = 'new';
                if (upvotes + downvotes < 10) {
                    rating = 'new';
                } else if (upvotes / downvotes > 0.66) {
                    rating = 'hot'
                } else if (upvotes / downvotes >= 0.5 && (upvotes > 100 || downvotes > 100)) {
                    rating = 'controversial';
                } else if (upvotes / downvotes < 0.5) {
                    rating = 'unpopular';
                }

                return [inflatedUpvotes,inflatedDownvotes,balance,rating];
            }
        }
    }
}

exercise();