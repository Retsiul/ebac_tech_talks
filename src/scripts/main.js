AOS.init();

const dataDoEvento = new Date('Dec 03, 2025 19:00:00');
const timestampDoEvento = dataDoEvento.getTime();

const contaASHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timestampDoEvento - timeStampAtual;
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;
    const diaAteOEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteEvento % horasEmMs) / minEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteEvento % minEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diaAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (diaAteOEvento < 0) {
        clearInterval(contaASHoras);
        document.getElementById('contador').innerHTML = "Evento expirado";

    }

}, 1000)