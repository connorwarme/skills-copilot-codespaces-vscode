function skillMembers() {
    return {
        members: [
            { name: 'John', skill: 'JavaScript' },
            { name: 'Jane', skill: 'JavaScript' },
            { name: 'Jack', skill: 'JavaScript' },
            { name: 'Jill', skill: 'JavaScript' },
        ],
        getMemberNames: function() {
            return this.members.map(function(member) {
                return member.name;
            });
        },
        getMemberSkills: function() {
            return this.members.map(function(member) {
                return member.skill;
            });
        },
    };
}