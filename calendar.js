
$(document).ready(function () {
    $('#calendar').fullCalendar({
        themeSystem: 'bootstrap4',
        header: {
            left: 'prev , next, today',
            center: 'title',
            right: 'month,agendaWeek,adengaDat,listMonth'
        },
        editable: true,
        weekends: true,
        defaultView: 'month',

        events: [
            {
                title: 'Vacation Time Baby!',
                start: '2018-10-01',
                end: '2018-10-16'}
                
            
        ],
        color: '#FFA07A'
    });
});

// {
//     id: 'Duration',
//         title: 'Duration', //pulling date range
//             durationEditable
// },
// {
//     title: 'event3', //probably not necessary but to provide code skeleton
//         start: '2018-01-09T12:30:00',
//             allDay: false // will make the time show
// }
// code to retrieve/link info from flight api & weather api and show on calendar

// customButtons: {
//     addEventButton: {
//         text: 'Get Weather',
//         click: function() {
//             var dateStr = " ", //this will need to pull from flight api selection
//             var date = moment(dateStr);

//             if (date.isValid()) {
//                 $('#calendar').fullCalendar('renderEvent',{
//                     title: 'Weather', //how to display Temp?  don't use title but by resourceId- is this an option?
//                     start: date,
//                     allDay: true
//                 });
//             }

//         }
//     }
// }

    //     resources: [
    //         {
    //             id: 'weatherData',
    //             title: ''
    //             _children: [
    //                 id, 'temp',
    //                 title, 'Temperature'
    //             ],

    //             id: 'location',
    //             title: 'city'
    //         }
    //     ]
    // }
    //     ],