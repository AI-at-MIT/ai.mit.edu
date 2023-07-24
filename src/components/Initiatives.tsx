import InitiativeCard from "./InitiativeCard";
export default function Initiatives() {

    return (
      <div className="section">
        <h1>Initiatives</h1>
  
        <div className="flex flex-wrap gap-4 justify-center m-10 max-w-[900px]">
          <InitiativeCard type="l"  />
          <InitiativeCard type="w" />
          <InitiativeCard type="s" />
          <InitiativeCard type="g" />
          <InitiativeCard type="p"/>
        </div>
      </div>
  
    );
  }
  