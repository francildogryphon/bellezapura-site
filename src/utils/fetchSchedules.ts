/**
 * Util responsável por mockar ou conectar à tabela de horários futura.
 * Quando o Google Sheets for acoplado no Epic 5, esta engine processará
 * o fetch mantendo o contrato de dados intacto para o Frontend evitar quebra.
 */

type Schedule = {
  modalityName: string;
  shifts: string[];
};

const rawSchedulesDatabase = [
  { modalityName: "Natação Bebês (A partir de 6 meses)", shifts: ["Ter e Qui: 08:00", "Seg e Qua: 15:30"] },
  { modalityName: "Natação Kids e Teens", shifts: ["Seg a Sex: Vários Horários", "Sábados: Manhã Livre"] },
  { modalityName: "Natação Adulto", shifts: ["06:00 as 22:00 (Grade Livre)"] },
  { modalityName: "Hidroginástica", shifts: ["Ter e Qui: 07:00", "Seg, Qua e Sex: 18:00"] },
  { modalityName: "Muay Thai", shifts: ["Seg e Qua: 19:30", "Ter e Qui: 20:30"] },
  { modalityName: "Ballet (Baby Class)", shifts: ["Ter e Qui: 09:00", "Qua e Sex: 16:00"] },
  { modalityName: "Jazz e Hip Hop", shifts: ["Ter e Qui: 18:30"] },
  { modalityName: "Sapateado (Baby Tap)", shifts: ["Seg e Qua: 17:30"] },
  { modalityName: "Pilates Solo", shifts: ["Seg e Qua: 07:00", "Ter e Qui: 19:00"] },
  { modalityName: "Treino Funcional", shifts: ["Seg a Sex: 06:00, 18:00, 20:00"] }
];

export async function fetchSchedules(): Promise<Schedule[]> {
  // Simulador de falha de rede ou latência para Graceful Degradation:
  try {
    // No futuro aqui ocorrera: await fetch(GOOGLE_SHEETS_CSV)
    return rawSchedulesDatabase;
  } catch (err) {
    console.error("Falha ao puxar Grade de Horários externa:", err);
    return []; // Retorna vazio silenciosamente
  }
}

export function getShiftsFor(modality: string, schedules: Schedule[]): string[] {
  const match = schedules.find(s => s.modalityName === modality);
  return match ? match.shifts : [];
}
