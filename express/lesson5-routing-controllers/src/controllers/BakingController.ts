import {
  JsonController,
  Post,
  Get,
  Param
} from "routing-controllers";

@JsonController("/baking")
export class BakingController {

  @Post("/start")
  startBaking() {

    return {
      status: "success",
      message: "Baking started"
    };
  }

  @Get("/status/:id")
  getStatus(@Param("id") id: string) {

    return {
      status: "success",
      orderId: id,
      bakingStatus: "In Progress"
    };
  }
}