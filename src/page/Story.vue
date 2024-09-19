<template>
  <!-- Container -->
  <div class="box">
    <h1>La Mia Storia</h1>

    <!-- <p>
      Mi chiamo <span class="green">Samuele</span> sono un ragazzo del 2000, nato a Priverno(LT) un piccolo
      paesino del Lazio. 

      La mia carriera lavorativa è iniziata presto dopo la scuola superiore, ho
      frequentato l'ITIS Teodosio Rossi di Priverno per poi lavorare per
      un'azienda in zona che prestava servizi di manutenzione a campi
      fotovoltaici, successivamente ho trovato occupazione presso una fabbrica
      di lavelli in composito per circa 3 anni. 

      
      Insoddisfatto del mio lavoro, decisi di buttarmi nel campo della programmazione web 
      iscrivendomi al corso di <span class="green"><a href="https://boolean.careers/">Boolean Careers</a></span> 

      Attualmente sto valutando nuove opportunita lavorative, scrivimi se sei interessato a conoscermi!
    </p> -->

    <p>
      Mi chiamo <span class="green">Samuele</span> sono un ragazzo del 2000, nato a Priverno(LT) un piccolo
      paesino del Lazio.
    </p>

    <p>

      La mia carriera lavorativa è iniziata presto dopo la scuola superiore, ho
      frequentato l'ITIS Teodosio Rossi di Priverno per poi lavorare per
      un'azienda in zona che prestava servizi di manutenzione a campi
      fotovoltaici, successivamente ho trovato occupazione presso una fabbrica
      di lavelli in composito per circa 3 anni. 
    </p>

    <p>
      Insoddisfatto del mio lavoro, decisi di buttarmi nel campo della programmazione web 
      iscrivendomi al corso di <span class="green"><a href="https://boolean.careers/">Boolean Careers</a></span> 
    </p>

    <p>
      Attualmente sto valutando nuove opportunita lavorative, scrivimi se sei interessato a conoscermi!
    </p>
  </div>
</template>

<script>
export default {
  name: "Story",
  data() {},

};
</script>

<style lang="scss" scoped>
@use "src/style/general.scss" as *;
.box {
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin: 10% auto;
}

.green{
  color: green;
  cursor: pointer;
}

a{
  text-decoration: none;
  color: green;
}
</style>
