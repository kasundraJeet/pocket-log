import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Combobox } from "../ui/combobox";

const formSchema = z.object({
  number: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  framework: z.string().min(1, { message: "Please select a framework." }),
});

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

function UserOnboarding() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog open={true}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Welcome! Let’s Get Started</DialogTitle>
          <DialogDescription>
            Please fill out your details to personalize your experience.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 py-4"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number*</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="framework"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Framework*</FormLabel>
                    <FormControl>
                      <Combobox
                        items={frameworks}
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                        labelKey="label"
                        valueKey="value"
                        placeholder="Select a framework..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" variant="secondary">
                Save Profile
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default UserOnboarding;
