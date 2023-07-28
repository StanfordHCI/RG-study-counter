import { GenieClass, DataClass, GenieKey, GenieProperty, GenieFunction, int } from "reactgenie-lib";

@GenieClass("A counter example")
export class Counter extends DataClass{
    //DataClass need a Key
    @GenieKey
    public id: string;

    @GenieProperty()
    public name: string;
    @GenieProperty()
    public type: string;
    @GenieProperty()
    public count: int;

    @GenieProperty()
    public created: boolean;

    constructor({id, name, type, count=0, created}:{id: string, name: string, type: string, count?: int, created: boolean}) {
        super({})
        this.id = id;
        this.name = name;
        this.type = type;
        this.count = count
        this.created = created;
    }

    //Create Function
    @GenieFunction()
    static CreateCounter({name, type, count=0, created}: {name: string, type: string, count?: int, created: boolean}): Counter {
      const id = Counter.All().length.toString();
      Counter.CreateObject({id: id, name: name, type: type, count: count, created: created})
      return Counter.GetObject({id: id});
    }

    //Initialization
    static setup() {
        Counter.CreateCounter({name: "apple", type: "fruit", created: true});
        Counter.CreateCounter({name: "orange", type: "fruit", created: true});
        Counter.CreateCounter({name: "potato", type: "vegetable", created: true});
    }

    //Your own functions
    @GenieFunction()
    deleteCounter(): void {
        Counter.DeleteObject({id:this.id});
    }

    @GenieFunction()
    increment(): void {
        this.count = this.count + 1;
    }

    @GenieFunction()
    decrement(): void {
        this.count -= 1;
    }

    static Examples = [
        {
            user_utterance: "increment",
            example_parsed: "Counter.Current().increment()",
        },
        {
            user_utterance: "show me all vegetables counters",
            example_parsed: 'Counter.All().matching(field: .type, value: "vegetable")',
        },
        {
            user_utterance: "increase me all fruit counters",
            example_parsed: 'Counter.All().matching(field: .type, value: "fruit").increment()',
        }]
}

