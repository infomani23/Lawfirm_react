$img = "Your base64 file";

                $folderPath = "/";
                $image_parts = explode(";base64,", $img);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $file = $folderPath . "issue_fixed" . '.png';
                file_put_contents($file, $image_base64);
                die("File saved Successfully");