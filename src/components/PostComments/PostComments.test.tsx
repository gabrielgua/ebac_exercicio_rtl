import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve renderizar dois comentários', () => {
      const addComment = (comment: string) => {
        fireEvent.change(screen.getByTestId('comment-textarea'), {
          target: { value: comment }
        });
        fireEvent.click(screen.getByTestId('comment-btn'));
      }
      
      render(<PostComment />);

      addComment('Muito legal, onde comprou?');
      addComment('Parece ser de ótima qualidade e bem bonita!');

      expect(screen.getAllByTestId('comment')).toHaveLength(2)


    })
});