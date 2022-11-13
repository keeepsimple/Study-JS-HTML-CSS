var users = [
    {
        id:1,
        name:'Quang Nguyen'
    },
    {
        id:2,
        name: 'Hoe Dang'
    }
]

var comments = [
    {
        id:1,
        user_id:1,
        content:'Anh yeu emm'
    },
    {
        id:2,
        user_id:2,
        content:'Em cung yeu anh nhieuuu'
    },
    {
        id:3,
        user_id:1,
        content:'Anh yeu em nhieuu honnnnn'
    }
]

function getComments(){
    return new Promise(function(resolve){
        resolve(comments)
    })
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        resolve(result)
    })
}

getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id
        })

        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data){
        var commentBlock = document.getElementById('comment-block');

        var html = ''

        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id
            })

            html += `<li>${user.name}: ${comment.content}</li>`
        })

        commentBlock.innerHTML = html;
    })

