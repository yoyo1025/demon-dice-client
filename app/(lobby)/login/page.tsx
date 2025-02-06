import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Login() {
  return (
    // <div className="container mx-auto flex justify-center items-center text-center">
    <div className="h-screen w-screen flex justify-center items-center text-center">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          おかえりなさい
        </TabsContent>
        <TabsContent value="Signup">
          新しくゲームを始める
        </TabsContent>
      </Tabs>
    </div>
  );
}
