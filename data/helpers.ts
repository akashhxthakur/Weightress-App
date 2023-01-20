import {database} from './database';
export type Weight = {
  createdAt?: Date;
  weight: string | number;
  note: string | undefined;
};

export const Weights = database.collections.get('weights');

export const ObserveWeights = () => Weights.query().observe();
export const SaveWeight = async ({ weight, note }: Weight) => {
  console.log(weight +"====="+ note)
  await database.action(async () => {
    await Weights.create((entry) => {
      entry.weight = Number(weight);
      entry.note = note;
    });
  });
};