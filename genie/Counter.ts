import { GenieClass, DataClass, GenieKey, GenieProperty, GenieFunction, int } from "reactgenie-lib";
 
@GenieClass("A counter example")
export class Counter extends DataClass{
    //DataClass need a Key
    @GenieKey
    @GenieProperty()
    public id: int;
 
    @GenieProperty()
    public name: string;
    @GenieProperty()
    public type: string;
    @GenieProperty()
    public count: int;
 
    constructor({id, name, type, count=0}:{id: int, name: string, type: string, count?: int}) {
        super({})
        this.id = id;
        this.name = name;
        this.type = type;
        this.count = count
    }
 
    //Create Function
    @GenieFunction()
    static CreateCounter({name, type, count=0}: {name: string, type: string, count?: int}): Counter {
      const id = Counter.All().length+1;
      Counter.CreateObject({id: id, name: name, type: type, count: count})
      return Counter.GetObject({id: id});
    }
 
    //Initialization
    static setup() {
        Counter.CreateCounter({name: "apple", type: "fruit"});
        Counter.CreateCounter({name: "orange", type: "fruit"});
        Counter.CreateCounter({name: "potato", type: "vegetable"});
    }
 
    //Your own functions
    @GenieFunction()
    delete(): void {
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
}

export const CounterExamples = [
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
    }
]