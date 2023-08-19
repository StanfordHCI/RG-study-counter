import {GenieClass, DataClass, GenieKey, GenieProperty, int, GenieFunction} from "reactgenie-lib";

@GenieClass("A counter example")
export class Counter extends DataClass{
    @GenieKey
    public id:string;

    @GenieProperty("The name of object that you want to count")
    public name: string;
    @GenieProperty("The type of objects (vegetable, fruit, ...)")
    public type: string;
    @GenieProperty()
    public count: int;
    @GenieProperty()
    public created: boolean;

    constructor({id, name, type, count = 0, created}: {id: string, name: string, type: string, count?: int, created:boolean}) {
        super({})
        this.id = id;
        this.name = name;
        this.type = type;
        this.count = count
        this.created = created;
    }
    @GenieFunction()
    static CreateCounter({name, type, count=0, created}:
                             {name:string, type:string, count?:int, created:boolean}): Counter {
        const id = Counter.All().length.toString(); // automatically generate a unique id
        return Counter.CreateObject({id: id, name: name, type: type, count: count, created: created})
    }
    static setup() {
        Counter.CreateCounter({name:"apple", type:"fruit",created:true});
        Counter.CreateCounter({name:"orange", type:"fruit", created:true});
        Counter.CreateCounter({name:"potato", type:"vegetable", created:true});
    }
    @GenieFunction()
    increment(): void {
        this.count = this.count + 1;
    }

    @GenieFunction()
    decrement(): void {
        this.count -= 1;
    }

    @GenieFunction()
    delete(): void {
        Counter.DeleteObject({id: this.id});
    }
    static Examples = [
        {
            user_utterance: "Increse this counter",
            example_parsed: "Counter.Current().increment()",
        },
        {
            user_utterance: "show me all vegetables counters",
            example_parsed: 'Counter.All().matching(field: .type, value: "vegetable")',
        },
        {
            user_utterance: "increase me all fruit counters",
            example_parsed: 'Counter.All().matching(field: .type, value: "fruit").increment()',
        },
        {
            user_utterance: "Delete this counter",
            example_parsed: 'Counter.Current().delete()',
        }]
}