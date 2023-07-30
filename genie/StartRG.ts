
import {
  GenieKey,
  GenieClass,
  GenieFunction,
  GenieProperty,
  DataClass,
  float,
} from "reactgenie-lib";
import "reflect-metadata";


@GenieClass("A template for DataClass")
export class StartRG extends DataClass {
  @GenieKey
  @GenieProperty()
  public id: string;
  @GenieProperty()
  public content: string;




  constructor({id, content}: {id: string; content: string;}) {
    super({});
    this.id = id;
    this.content = content;

  }


  static setup() {

    StartRG.CreateObject({ id: "1", content: "Welcome to ReactGenie Developer Study !"});
  }

  static Examples = [
    {
      user_utterance: "current content",
      example_parsed: "StartRG.Current().content",
    },

  ];

}


