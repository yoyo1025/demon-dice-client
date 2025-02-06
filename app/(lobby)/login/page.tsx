import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Login() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-center px-4">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/game-title-image.png"
                alt="game-title-image"
                width={200}
                height={100}
              />
              <CardDescription>
                おかえりなさい！ゲームを始めましょう！！
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 flex flex-col items-start">
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
              </div>
              <div className="space-y-1 flex flex-col items-start">
                <Label htmlFor="password">Password</Label>
                <Input id="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>ログイン</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Signup">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/game-title-image.png"
                alt="game-title-image"
                width={200}
                height={100}
              />
              <CardDescription>
                はじめまして！ゲームを始めましょう！！
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 flex flex-col items-start">
                <Label htmlFor="username">Username</Label>
                <Input id="current" type="text" />
              </div>
              <div className="space-y-1 flex flex-col items-start">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="text" />
              </div>
              <div className="space-y-1 flex flex-col items-start">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>新規登録</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
