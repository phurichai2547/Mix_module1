class Membership {
    static autoId = 1;
    constructor() {
        this.members = []
    }
    subscribe(name) {
        if (this.findMemberName(name) !== -1) {
            return -1; // Duplicate member name
        }

        const memberId = Membership.autoId++;
        this.members.push({ memberId, memberName: name });
        return this.members.length;
    }
    unsubscribe(id) {
        if (id === undefined) {
            return -1;
        }

        const index = this.findMemberId(id);
        if (index !== -1) {
            this.members.splice(index, 1);
            return id;
        }

        return -1;
    }
    findMemberId(id) {
        return this.members.findIndex((member) =>
            member.id === id
        );
    }
    findMemberName(name) {
        return this.members.findIndex(member => member.memberName.toLowerCase() === name.toLowerCase());
    }
}


// Example usage:
let membership = new Membership();
console.log(membership.subscribe("Alison Butler"));
console.log(membership.subscribe("Simon Brown"));
console.log(membership.subscribe("Tim Carr"));
console.log(membership.subscribe("Neil Davidson"));
console.log(membership.subscribe("Tim Carr")); // Duplicate name, returns -1
console.log(membership.members);

console.log(membership.unsubscribe(3)); // Remove member with id 3
console.log(membership.members);