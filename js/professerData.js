export default class UnitManagementRepository {
    async fetchUnits () {
        const　dataUnits = {
            data: [
                {
                    id: '',
                    name: '福山雅治',
                    university:'慶應義塾大学',
                    undergraduate:'経済学部',
                    className:'ミクロ経済学基礎',
                    credits:'0.0',
                    courseContent:'0.0',
                    funLesson:'0.0',
                    grade:'はい',
                    attendanceCheck:'ある',
                    examnation:'ある',
                    seat:'ある',
                    commentField:''
                },
                
            ]
        }
        return dataUnits.data
    }
}
