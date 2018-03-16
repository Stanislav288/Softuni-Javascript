function execute() {
    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.online = false;
            let contactContext=this;
            $(this.online).on('change',function(contactContext) {
                console.dir('online '+this);
               if(contactContext.online===false){

               }
            });
        }

        render(id) {
            let article = $('<article>');
            let title = $('<div>').addClass('title').text(`${this.firstName} ${this.lastName}`);
            let titleButton = $('<button>').html('&#8505;').appendTo(title)
                .on('click', function () {
                    let currentInfo=$(this).parent().parent().find('.info');
                    if (currentInfo.css('display') === 'none') {
                        currentInfo.css('display', 'block');
                    } else {
                        currentInfo.css('display', 'none');
                    }

                });
            let info = $('<div>').addClass('info').css('display', 'none')
                .append($('<span>').html(`&phone; ${this.phone}`))
                .append($('<span>').html(`&#9993; ${this.email}`));

            article.append(title);
            article.append(info);
            article.appendTo($('#' + id));

        }
    }

    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
         new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        // new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

    // After 1 second, change the online status to true
    setTimeout(() => contacts[1].online = true, 2000);
    setTimeout(() => contacts[0].online = true, 2000);

}
