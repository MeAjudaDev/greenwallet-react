# Modo de uso

```jsx
import { useToast } from "../../components/Toast/ToastProvider";
import Button from "../../components/Button";

const { toast } = useToast();

const showToast = () => {
    toast({
        title: "Meu Título",
        type: "success",
        message: "Minha Mensagem!",
    });
};

return (
    <div className="App">
        <Button primary onClick={showToast} style={{ width: 100 }}>
            Toast
        </Button>
    </div>
);
```
