import { format, parseISO, isBefore, subHours } from 'date-fns';
import axios from 'axios';

import repositoryAtendimento from '../../repository/Atendimentos';

class Atendimento {
  async add(atendimento) {
    const data = format(parseISO(atendimento.data), 'yyyy-MM-dd HH:mm:ss');
    const dataCriacao = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    if (isBefore(parseISO(data), new Date())) {
      return { error: 'Past dates are not permitted.' };
    }

    const atendimentoModificado = { ...atendimento, dataCriacao, data };

    return repositoryAtendimento.add(atendimentoModificado).then((result) => {
      const id = result.insertId;
      return { ...atendimentoModificado, id };
    });
  }

  async listAtendimento(id) {
    return repositoryAtendimento.listAtendimento(id).then(async (result) => {
      const atendimento = result;
      const { cliente } = atendimento;

      const { data } = await axios.get(`http://localhost:8082/${cliente}`);
      atendimento.cliente = data;

      return atendimento;
    });
  }

  async listAtendimentos() {
    return repositoryAtendimento.listAtendimentos();
  }

  async update(id, atendimento) {
    if (atendimento.data) {
      atendimento.data = format(
        parseISO(atendimento.data),
        'yyyy-MM-dd HH:mm:ss'
      );

      const dateWinthSub = subHours(atendimento.date, 2);

      if (isBefore(dateWinthSub, new Date())) {
        return {
          error: 'You can only cancel appointments 2 hours in advance.',
        };
      }
    }

    return repositoryAtendimento
      .update(atendimento, id)
      .then(() => ({ ...atendimento, id }));
  }

  async delete(id) {
    return repositoryAtendimento.delete(id).then(() => ({ id }));
  }
}

export default new Atendimento();
